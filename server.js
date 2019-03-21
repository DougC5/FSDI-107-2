console.log('hello from Node');

const http = require('http');
const express = require('express');
const app = express();

//Config Sections enable for CORS for testing
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
}); 

// Config body parse to speak JSON

let bparse = require('body-parser');
app.use(bparse.json());

app.get('/', (req, res) => {
  res.send('<h1>Hello</h1>');
});

app.get('/about', (req, res) => {
  res.send('<h1>This is about me</h1>');
});

app.get('/error', (req, res) => {

  res.status(502);
  res.send('<h1>ERROR</h1>');
});


//********
//******** API/points  ********
//********

let items = [];
let count = 1;

app.get('/API/points', (req, res) => {
  res.send(items);
});

app.post('/API/points', (req, res) => {
  console.log('post recieved! ' + req.body);
  let theItem = req.body;
  theItem.id = count;
  count += 1;

  items.push(theItem);

  res.send(items);

  res.send(':D');
});

const server = app.listen(8080, () => {
  console.log('Derver started at local host 8080');
});
