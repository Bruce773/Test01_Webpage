// To run the Test01 website on a NodeJS server open the Terminal and type:
// 
// $ cd Test01_Webpage
// $ node nodeJsServer
// 
// Then, to run it using nGrok type:
// 
// $ cd Test01_Webpage
// $ ngrok http 3000

var express = require("express");

var app = express();

var port = 3000

app.use(function(req, resp, next){

	console.log(`${req.method} request made for '${req.url}'`); //this prints to the console whenever a request is made to Express
	next(); //this tells Express to move on to the next app.use
});

app.use(express.static("../Test01_Webpage"));

app.listen(port);

console.log("Test01 Website running on port " + port);

module.exports = app;
