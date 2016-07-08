var orm = require('../config/orm.js');

/* The following commands will run every time the app gets started.*/


module.exports = function(app){


		orm.selectAll('burgers', function (res) {
			res.render('index', {	       
	            burgers: res,            
        	});
		});
	        
	     
		
		orm.updateOne('burgers', 'req.params.ident', function (res) {
			res.redirect('/index');
		});		
			     
	
		
		
		orm.insertOne('burgers', 'addedBurger', function (res) {
			res.redirect('/index'); 
		});
		   
}; // end module.exports = function(app){

