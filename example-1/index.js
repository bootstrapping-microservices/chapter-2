const express = require("express");

const app = express();
const port = 3000

//
// Registers a HTTP GET route.
//
app.get("/", (req, res) => {
    res.send("Hello World!");
});

//
// Starts the HTTP server.
//
app.listen(port, () => {
    console.log(`First example app listening on port ${port}, point your browser at http://localhost:3000`);
});  