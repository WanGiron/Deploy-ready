var express = require('express');
// var router = require('./routes/html-routes/routes.js');

var PORT = process.env.PORT || 5000;

// Server //
var app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Static folder//
app.use(express.static(__dirname + '/assets'));




//-----------------// ROUTES //-----------------//
// Import routes and give the server access to them //
require("./routes/html-routes/routes")(app);
//-----------------------------------------------//



// server //
app.listen(PORT, function () {
    console.log(
        "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
        PORT, PORT);
});
