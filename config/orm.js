var connection = require('../config/connection.js');

// object relational mapper (ORM)

var orm = {
    selectAll: function(tableSelected) {
        var queryString = 'SELECT * FROM ' + tableSelected;
        connection.query(queryString, function(err, result) {
            return result;

        });
    },
    
    insertOne: function(tableToInsert, burgerName) {
        var queryString = 'INSERT INTO ' + tableToInsert + ' (burger_name, devoured, date) VALUES (' + burgerName + ', false, now())';
        connection.query(queryString, function(err, result) {
            return result;
        });
    },

    updateOne: function(tableToUpdate, valKey) {
        var queryString = 'UPDATE ' + tableToUpdate + ' SET devoured = false WHERE id = ?';
        connection.query(queryString, [valKey], function(err, result) {
            return result;

        });
    }
};

module.exports = orm;

//  `selectAll()`, `insertOne()`, `updateOne()`