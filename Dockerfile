# Use the node:20.12.0-alpine3.19 image as the base
FROM node:20.12.0-alpine3.19

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json for the client
COPY client/package*.json ./client/

# Install client dependencies
RUN cd client && npm install

# Copy the rest of the client code
COPY client/ ./client/

# Build the React application
RUN cd client && npm run build

# Copy package.json and package-lock.json for the server
COPY server/package*.json ./server/

# Install server dependencies
RUN cd server && npm install

# Copy the rest of the server code
COPY server/ ./server/

# Copy the built files to the server's public directory
RUN mkdir -p server/public && cp -r client/build/* server/public/

# Make port 3001 available to the world outside this container
EXPOSE 3001

# Set the working directory to the server
WORKDIR /usr/src/app/server

# Start the server using server.js
CMD ["node", "server.js"]