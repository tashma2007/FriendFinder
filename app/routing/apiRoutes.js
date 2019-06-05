var houses = require("../data/houses.js");
var surveyData;
var svDataScores;

// Routing
module.exports = function (app) {

    // GET request
    app.get("/api/friends", function (req, res) {
        res.json(houses);
    });

    // POST request
    app.post("/api/houses", function (req, res) {
        var bestMatch = {
            name: "",
            photo: "",
            housesDiff: 51
        };

        surveyData = req.body;
        svDataScores = surveyData.scores;


        var totDiff = 0;
        
        for (var i = 0; i < houses.length; i++) {
            
            totDiff = 0;

            for (var j = 0; j < svDataScores.length; j++) {

                totDiff += Math.abs(parseInt(svDataScores[j]) - parseInt(houses[i].scores[j]));

                if (totDiff <= bestMatch.housesDiff) {

                    bestMatch.name = houses[i].name;
                    bestMatch.photo = houses[i].photo;
                    bestMatch.housesDiff = totDiff;

                }
            }
        }

        houses.push(surveyData);

        res.json(bestMatch);

        console.log(surveyData);
        console.log(bestMatch);

    });
};
