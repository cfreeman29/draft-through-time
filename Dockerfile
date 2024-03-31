# Use the node:20.12.0-alpine3.19 image as the base
FROM node:20.12.0-alpine3.19

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install app dependencies
RUN npm install react react-router-dom framer-motion react-hook-form

# Copy the rest of the application code
COPY . .

# Make port 3001 available to the world outside this container
EXPOSE 3001

# Define environment variable
ENV NAME DraftedThroughTime

# Build the React application
RUN npm run build

# Serve the built application using a static server
FROM node:20.12.0-alpine3.19
WORKDIR /usr/src/app
COPY --from=0 /usr/src/app/build ./build
RUN npm install -g serve
CMD ["serve", "-s", "build", "-l", "3001"]