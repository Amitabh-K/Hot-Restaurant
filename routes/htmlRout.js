const path = require('path');


module.exports = function(app) {

    
  // get from tables html
    app.get("/tables", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/tables.html"));
    });

   // get from reserve  html
    app.get("/reserve", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/reserve.html"));
    });

  // nothing is found move to homepage
    app.get("*", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/index.html"));
    });
  };

  var path = require("path");



  