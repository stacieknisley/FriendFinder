// Your `apiRoutes.js` file should contain two routes:
//    * A GET route with the url`/api/friends`.
// This will be used to display a JSON of all possible friends.
//    * A POST routes`/api/friends`.
// This will be used to handle incoming survey results.
// This route will also be used to handle the compatibility logic. 

// ===============================================================================
// LOAD DATA
// Link routes to a series of "data" sources.
// Data sources hold arrays of information on "user" Data etc.
// ===============================================================================
var userData = require("../data/friends");
var path = require('path');

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {
    // API GET Request
    // Below code handles when users "visit" a page.
    // The GET case below, when a user visits a link
    // (ex: url`/api/friends`) they are shown a JSON of all possible friends)
    // ---------------------------------------------------------------------------

    app.get("/api/friends", function (req, res) {
        res.json(userData);
    });


    // API POST Requests
    // Below code handles when a user submits a survey and thus submits data to the server.
    // In each of the below cases, when a user submits form data (a JSON object)
    // ...the JSON is pushed to the appropriate JavaScript array
    // (ex. User fills out survey this data is then sent to the server...
    // Then the server saves the data to the userArray.
    // This will be used to display a JSON of all possible friends.
    //    * A POST routes`/api/friends`.
    // This will be used to handle incoming survey results.
    // This route will also be used to handle the compatibility logic. 

    //     Determine the user's most compatible friend using the following as a guide:
    //    * Convert each user's results into a simple array of numbers (ex: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`).
    //    * With that done, compare the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the `totalDifference`.
    //    * Example: 
    //        * User 1: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`
    //         * User 2: `[3, 2, 6, 4, 5, 1, 2, 5, 4, 1]`
    //             * Total Difference: ** 2 + 1 + 2 =** ** _5_ **
    //    * Remember to use the absolute value of the differences.Put another way: no negative solutions! Your app should calculate both`5-3` and`3-5` as `2`, and so on. 
    //    * The closest match will be the user with the least amount of difference.

    // 7. Once you've found the current user's most compatible friend, display the result as a modal pop - up.
    //    * The modal should display both the name and picture of the closest match.

    // ---------------------------------------------------------------------------

    app.post("/api/friends", function (req, res) {
        console.log(req.body.scores);

        var diff = [];
        var userData = req.body.scores;
        var matchIndex;
        var length = userData.length;

        for (i = 0; i < length; i++) {
            var dataScores = userData[i].scores;
            var subtract = [];
            for (j = 0; j < dataScores.length; j++) {
                subtract.push(Math.abs(userScores[j] - dataScores[j]));
            };
            function getSum(total, num) {
                return total + num;
            }
            diff.push(subtract.reduce(getSum));
        };

        var minimum = Math.min(...diff);

        matchIndex = diff.indexOf(minimum);

        friendData.push(req.body);

        res.json(friendData[matchIndex]);



        // Note the code here. Our "server" will respond to requests and provide a friend match.
        // req.body is available since we're using the body-parser middleware
        // pseudo code:
        // Add all the numbers or values of each score from the userData array in the friends.js file.
        // Use the most recently added score from the userData array in the friends.js file and compare this
        // to all other scores from the userData array. 
        // Then display the name and photo of the score with the closest value to the most recently added userData.

        // Use this to add a new user to the userData Array.
        // Array.prototype.splice()
        // Adds and / or removes elements from an array.
        // Add a for loop to loop through each user from the data/friends.js file
        // Displays a single character, or returns false
        // app.get("/api/friends/:friends", function (req, res) {



        //     for (var i = 0; i < userData.length; i++) {
        //         if (chosen === name[i].routeName) {
        //             return res.json(name[i]);
        //         }
        //     }

        //     return res.json(false);
        // });

        // Create New friend - takes in JSON input
        // app.post("/apiRoutes", function (req, res) {



            // if (userData.length < 5) {
            //     userData.push(req.body);
            //     res.json(true);
            // }
            // else {
            //     waitListData.push(req.body);
            //     res.json(false);
            // }
        // });

        // ---------------------------------------------------------------------------
        // Code to clear out the array of data.
        // Not using the post clear data function, 
        // I don't want to remove friend data.
        // app.post("/api/clear", function () {
        // Empty out the arrays of data
        // userData = [];

        // console.log(userData);
