var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session')
var cors = require('cors');
var config = require('./config');
var userCtrl = require('./controllers/userCtrl');
var profileCtrl = require('./controllers/profileCtrl');

var app = express();

app.use(bodyParser.json());

app.use(express.static('../public'));

app.use(session({ secret: config.sessionSecret }));

var corsOptions = {
  origin: 'http://localhost:8887'
};
app.use(cors())


app.post('/api/login', userCtrl.login);

app.get('/api/profiles', profileCtrl.getFriendsProfiles);


var port = 8887;
app.listen(port, () => {
  console.log(`we're on port: ${port}`);
})
