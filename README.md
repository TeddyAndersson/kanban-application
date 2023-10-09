# Simple Task Board

A modern web application built with Vite, React, and TypeScript.

## Table of Contents

- [Introduction](#introduction)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Scripts](#scripts)
- [Contributing](#contributing)
- [License](#license)

## Introduction

Welcome to the README for a Vite, React, and TypeScript application. This contains the source code for a simple task board.

## Getting Started

### Prerequisites

Before you begin, ensure you have the following tools installed:

- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [Vite](https://vitejs.dev/) (You can install it globally with `npm install -g create-vite`)

### Installation

Install dependencies

```shell
$ yarn
```

### Usage

After installation, you can start the development server with the following command:

```shell
$ yarn dev
```

This will start the development server, and your app will be available on localhost.

## Project Structure

The project structure is organized as follows:

```
root/
├── src/
│ ├── components/
│ ├── context/
│ ├── hooks/
│ ├── services/
│ ├── utils.ts
│ ├── App.tsx
│ └── index.css
│ └── types.ts
│ └── main.tsx
├── components/
└── ...
```

**components/:** contains all components (dumb and smart) for the application.

**context/:** contains context used in the application.

**hooks/:** contains hooks used in the application.

**services/:** layer for seperating data retrival integration.

**utils.ts:** file for utility functions.

**types.ts:** file for type declaration.

**index.css:** contains Tailwind directives.

**package.json:** Project configuration and dependencies.

**vite.config.js:** Vite configuration file.

## Scripts

yarn dev: Start the development server.
yarn build: Build the production-ready app for deployment.
yarn lint: Run linting checks on your code.
yarn preview : Serve the production build locally.

## Contributing

Contributions are welcome! If you have any suggestions, bug reports, or improvements, please open an issue or create a pull request following our contributing guidelines.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
