var express = require("express");

var app = express();

app.use(function(req, resp, next){

	console.log(`${req.method} request made for '${req.url}'`); //this prints to the console whenever a request is made to Express
	next(); //this tells Express to move on to the next app.use
});

app.use(express.static("../Test01_Webpage"));

app.listen(3000);

console.log("Test01 Website running on port 3000");

module.exports = app;
