const express = require("express");
const fs = require("fs");

const app = express();
const port = 3000;

//
// Route for video streaming.
//
// Original code for this:
// https://medium.com/better-programming/video-stream-with-node-js-and-html5-320b3191a6b6
//
app.get("/video", (req, res) => {

    //
    // Original video from here:
    // https://sample-videos.com
    //
    const path = "../videos/SampleVideo_1280x720_1mb.mp4";
    const stat = fs.statSync(path);
    const fileSize = stat.size;
    const head = {
        "Content-Length": fileSize,
        "Content-Type": "video/mp4",
    };
    res.writeHead(200, head);
    fs.createReadStream(path).pipe(res);
});

app.listen(port, () => {
    console.log(`Microservice listening on port ${port}!`);
});
