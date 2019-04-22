# React / LowDB Scaffold

Basic scaffold of a React app with a Node server

- Shows a list of people
- A `visible` flag on each user can be toggled by clicking them

## Endpoints

A node / express server runs on port 3001 by default. It has these endpoints:

- `GET /people` - _gets a list of all people, sorted by name_
- `GET /people?sortBy=email` - _gets a list of people sorted by their email_
- `POST /people` - _create a person_
- `DELETE /people/{id}` - _deletes the person with the specified ID_
- `PATCH /people/{id}` - _updates the person with the specified ID - only supports changes to `visible`_

## Getting started

1. `npm install` - install dependencies
2. `npm start` - client runs on port 3000; server runs on port 3001

## Useful Scripts

1. `npm run start:client` runs the client individually on port 3000
2. `npm run start:server` runs the server individually on port 3001
3. `npm run build` builds the front-end in production mode
4. `npm run serve` serves the contents of /build (created by npm run build) using an http server

## Part Two

1. A Go server with the same functionality exists here: https://github.com/ryanmccombe/golang-basics/tree/master/11_goEchoGorm
   Works as a straight replacement for the node server (runs on same port and has the same API) but, as I have no prior experience with Go, it is unlikely to be using good practices
2. The UI supports theme switching - theme is currently set in `./src/config.js` but set up in such a way that it could easily be set by the API or by users
