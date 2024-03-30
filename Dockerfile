# Use an official Node runtime as a parent image
FROM node:14

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and install dependencies
COPY ./server/package*.json ./server/
RUN cd server && npm install

# Bundle app source
COPY . .

# Make port 3001 available to the world outside this container
EXPOSE 3001

# Define environment variable
ENV NAME DraftedThroughTime

# Run app.py when the container launches
CMD ["node", "./server/server.js"]