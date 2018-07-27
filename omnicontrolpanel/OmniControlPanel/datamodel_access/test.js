var express = require('express');
var mysql = require('mysql');
var app = express();

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '7R0j4n83!',
    database: 'user_media'
})
connection.connect(function(error) {
    if(!!error) {
        console.log('Error');
    } else {
        console.log('Connected');
    }

});

app.get('/', function(request, response) {
    connection.query("SELECT * FROM application_settings.mailinglistsignup;", function(error, rows, fields) {
        if(!!error) {
            console.log('Error in the query');
        } else {
            console.log('Successful');
            console.log(rows);
        }
    });
})
app.listen(3000);