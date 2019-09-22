const express = require("express");

const app = express();
const port = 3000

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(port, () => {
    console.log(`First example app listening on port ${port}, point your browser at http://localhost:3000`);
});  