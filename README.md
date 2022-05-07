# Notetaker-deluxe

## Description
This module consisted of creating backend CRUD operations to interface with an already desgined front-end.  
In order to accomplish this, Express was used to create a server that takes http requests and interfaces with a json file.  
Additionally, a npm package called uniqid was used to generate unique ids for the note records.  
Finally, the entire application was deployed to Heroku.

## Technologies Used
- Express  
    This package intializes the entire application and creates the server.
- uniqid package  
    This package generates a unique id for each note that gets passed to the notes db file.  
    <a href="https://www.npmjs.com/package/uniqid">uniqid package</a>  
- Heroku  
    Since this module incorporates an express server, it has to be deployed using heroku instead of github pages.

## Demo
<img src="public/NoteTaker Demo.gif">

## Deployed Link
https://gentle-taiga-16262.herokuapp.com/