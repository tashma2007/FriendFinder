var houses = require("../data/houses.js");

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(houses);
    });

    app.post("/api/houses", function(req, res) {
        
    }
}
