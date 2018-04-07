// Get the dependencies

const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const app = express();

// loading authentication modules
const passport      = require('passport');
const cookieParser  = require('cookie-parser');
const session       = require('express-session');

const secret = process.env.SECRET || "this is the secret";

app.use(session({
  secret: secret,
  resave: true,
  saveUninitialized: true
}));

app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist -- For building -- REMOVE
app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.static(path.join(__dirname, 'src/assets')));

//CORS
app.use(function(reg, res, next){
  res.header("Access-Control-Allow-Origin", "http://localhost:4200");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE, OPTIONS');
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});

const port = process.env.PORT || '3100';
app.set('port', port);

// Create HTTP server
const server = http.createServer(app);

require('./assignment/app.js')(app);

// For Build: Catch all other routes and return the index file -- BUILDING
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

server.listen( port , function() {
  console.log('Node app is running on port', app.get('port'))});
