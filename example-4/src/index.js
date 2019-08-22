const express = require("express");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("Hello world!");
});

app.listen(port, () => {
    console.log(`Microservice listening on port ${port}!`);
});