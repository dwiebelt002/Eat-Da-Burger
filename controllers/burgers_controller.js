var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var path = require('path');


var ormFunctions = require('../models/burger.js')

module.exports = function(app) {


app.get('/', function (req, res) {
    res.render('index', {

    });
  
  };  

};


app.post('/create', function(req,res){
    
    connection.query('INSERT INTO quotes (author, quote) VALUES (?, ?)', [req.body.author, req.body.quote], function(err, result) {
      if (err) throw err;
      res.redirect('/');
    });
});

app.put('/update', function(req,res){
    console.log('id: ' + req.body.id);
    console.log('author: ' + req.body.author);
    console.log('quote: ' + req.body.quote);
    connection.query('UPDATE quotes SET author = ?, quote = ? WHERE id = ?', [req.body.author, req.body.quote, req.body.id], function(err, result) {
      if (err) throw err;
      res.redirect('/');
    });
});


app.delete('/delete', function(req,res){
    
    connection.query('DELETE FROM quotes WHERE id = ?', [req.body.id], function(err, result) {
      if (err) throw err;
      res.redirect('/');
    });
});
