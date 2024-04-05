
# Drafted Through Time

Welcome to the "Drafted Through Time" repository. This project is a web application that allows users to check if they would have been drafted into the Vietnam War based on their birthday. It's built with Node.js for the backend and React for the frontend.

## Features

- **Date Input**: Enter your birthday to check your draft status.
- **Historical Context**: Provides insight into the drafting process during the Vietnam War.
- **Responsive Design**: Ensures a seamless experience across various devices and screen sizes.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What things you need to install the software and how to install them:

```bash
node >= 20.12.0
npm >= 10.5.0
Docker (optional)
```
#### Dependencies

NPM Package List

```bash
"dependencies": {
    "express": "^4.19.2",
    "framer-motion": "^6.3.0",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-hook-form": "^7.30.0",
    "react-router-dom": "^6.3.0",
    "react-scripts": "5.0.1"
}
```
### Installing

A step by step series of examples that tell you how to get a development environment running:

1. Clone the repository:
```bash
git clone https://github.com/cfreeman29/draft-through-time.git
cd draft-through-time
```

2. Start the node server:
```bash
cd server
node server.js
```

2. Install NPM packages:
```bash
cd client
npm install
```

3. Start the application:
```bash
npm start
```

This runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Running the tests

Explain how to run the automated tests for this system:

```bash
npm test
```

## Deployment

You can deploy this on a live system using Docker or any preferred cloud hosting service.

### Using Docker

1. Build the Docker image:
```bash
docker build -t drafted-through-time .
```

2. Run the Docker container:
```bash
docker run -p 80:3000 drafted-through-time
```

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/cfreeman29/draft-through-time/tags). 

## Authors

* **Chris Freeman** - *Initial work* - [cfreeman29](https://github.com/cfreeman29)

See also the list of [contributors](https://github.com/cfreeman29/draft-through-time/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments
