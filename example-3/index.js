const express = require("express");
const fs = require("fs");

const app = express();
const port = 3000;

if (!process.env.VIDEOS_PATH) {
    throw new Error("Please specify the path to videos using the environment variable VIDEOS_PATH.");
}

const VIDEOS_PATH = process.env.VIDEOS_PATH;

//
// Route that lists videos.
//
app.get("/videos", (req, res) => {
    fs.readdir(VIDEOS_PATH, (err, files)  => {
        if (err) {
            console.error("An error occurred.");
            console.error(err && err.stack || err);
        }
        else {
            res.json({
                videos: files,
            })
        }
    });
});

app.listen(port, () => {
    console.log(`Microservice listening on port ${port}!`);
});