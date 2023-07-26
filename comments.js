// Create web server application
// This application will send back the JSON string array of comments
// when it receives a GET request at the path '/comments'

// Load the express module
   var express = require('express');
// Create an instance of an express server
var app = express();

// Create a route that will respond to GET requests with the path '/comments'
app.get('/comments', function(req, res) {
    // Create an array of comments
    var comments = [                     
        { name: 'John', comment: 'I love this article!' }, ]
     }); 