var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var connection = require('../config/connection.js');

var path = require('path');
var orm = require('../config/orm.js');


module.exports = function(app){

// html-routes

    app.get('/index', function (req, res) {
        
            orm.selectAll('burgers');
                
                res.render('index', {               
                   burgers: res
                }); //  end res.render
         
    }); // end  app.get



    app.use(function(req, res){
            orm.selectAll('burgers');
            
            res.render('index', {          
                burgers: res,
                
            });     
    }); 


// api-routes

    app.put('/devours/:ident', function (req, res) {
            orm.updateOne('burgers', req.params.ident);     
            res.redirect('/index'); 
    }); // end  app.post
    
    app.post('/addBurger', function (req, res) {
        orm.insertOne('burgers', 'addedBurger');
        res.redirect('/index'); 
    }); // end  app.post


}; // end module.exports