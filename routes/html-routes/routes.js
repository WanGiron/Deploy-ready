
var path = require("path");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../../assets/html/index.html"));
  });
};
