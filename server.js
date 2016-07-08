//Dependencies
var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var path = require('path');


var app = express(); // Tells node that we are creating an "express" server
var PORT = process.env.PORT || 8081; // Sets an initial port. We'll use this later in our listener

// BodyParser makes it easy for our server to interpret data sent to it.
// The code below is pretty standard.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));
app.use(express.static('public'));


require('./controllers/burgers_controller.js')(app); 


app.use(methodOverride('_method'));
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');



// LISTENER
// The below code effectively "starts" our server 


app.listen(PORT, function() {
	console.log("App listening on PORT: " + PORT);
});
