// ==============================================================================
// DEPENDENCIES
// npm packages for server to function properly
// ==============================================================================

var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// ==============================================================================
// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server
// ==============================================================================

// Tells node that we are creating an "express" server
var app = express();

// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// var of userData located in the friends.js file
// Routes located in the Routing folder in the 
// apiRoutes.js
// htmlRoutes.js
// Create New friends - takes in JSON input
// app.post("/apiRoutes", function (req, res) {
// req.body hosts is equal to the JSON post sent from the user
// This works because of our body-parser middleware
//     var newUser = req.body;

//     // Using a RegEx Pattern to remove spaces from newCharacter
//     // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
//     newfriend.routeName = newfriend.name.replace(/\s+/g, "").toLowerCase();

//     console.log(newfriend);

//     characters.push(newfriend);

//     res.json(newfriend);
// });

// =============================================================================
// LISTENER
// The below code effectively "starts" our server
// =============================================================================

app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});
