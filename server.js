//Dependencies
var express = require('express');
var methodOverride = require('method-override')
var bodyParser = require('body-parser');
var path = require('path');

var app = express(); 
var PORT = process.env.PORT || 8000;

//bodyParser added to make server understand data that is sent to it
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

require('./controllers/burgers_controller.js')(app);

app.use(methodOverride('_method'))
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
	defaultLayout: 'main'
}));

app.set('view engine', 'handlebars');

app.listen(PORT, function() {
	console.log("App listening on PORT: " + PORT);
})