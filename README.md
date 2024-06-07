# Simple API with Node.js

This is a basic API built using only native Node.js modules, with no additional packages required.

## Description

The API provides five routes:
- **GET /users**: Returns a list of users.
- **GET /users/:id**: Returns a user by ID.
- **POST /users**: Creates a new user.
- **PUT /users/:id**: Updates a user by ID.
- **DELETE /users/:id**: Deletes a user by ID.

## Prerequisites
- [Node.js](https://nodejs.org/) installed on your system.

## Installation
Clone this repository to your local machine:
```bash
git clone https://github.com/marcelosdias/node-http-server.git
cd node-http-server
```
## Start server
Run the index.js file to start the server on port 3000:
```bash
node src/index.js
```
The API will be available at http://localhost:3000
