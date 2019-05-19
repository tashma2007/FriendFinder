var path = require("path");

module.exports = function (app) {

    // Route from Survey HTML page
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    // Route from Home page
    app.use(function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
}