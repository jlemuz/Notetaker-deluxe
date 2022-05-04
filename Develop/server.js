const { notes } = require('./db/db.json');
const path = require('path');
//Library to generate uniqId
var uniqid = require('uniqid'); 
const fs = require('fs');

const express = require('express');

const app = express();

//enables access to public files such as JS and CSS
app.use(express.static('public'));

//Initializes app
app.listen(3001, () => {
    console.log(`API server now on port 3001!`);
  });


  app.use(express.urlencoded({ extended: true }));
  // parse incoming JSON data
  app.use(express.json());

//Renders the notes from the db.json
  app.get('/api/notes', (req, res) => {
    res.json(notes);
  });

//directs the page to the index.html page
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
  });

  //directs the page to the notes.html page
  app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
  });

  app.post('/api/notes', (req, res) => {
    //Uses the uniqid library to set the note ID
    req.body.id = uniqid();
  
     // add animal to json file and animals array in this function
  const animal = createNewNote(req.body, notes);

  res.json(notes);
    
  });


  function createNewNote(body, noteArray) {
    const note = body;
    noteArray.push(note);

    fs.writeFileSync(
        path.join(__dirname, './db/db.json'),
        JSON.stringify({ notes: noteArray }, null, 2)
      );
  
    return note;
  }


