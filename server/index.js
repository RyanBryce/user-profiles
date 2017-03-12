const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const cors = require('cors');
const sec = require('./secrets');

let app = express();

app.use(express.static('../public'))

app.use(bodyParser.json());

app.use(session({
  secret: sec.hid,
  resave: true,
  saveUninitialized: true
}))










let port = 3888;
app.listen(port, () => {
  console.log(`we're on port: ${port}`);
})
