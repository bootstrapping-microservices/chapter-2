const express = require("express");
const fs = require("fs");

const app = express();
const port = 3000;

//
// Simple video streaming end-point.
//
// Original code for this:
// https://medium.com/better-programming/video-stream-with-node-js-and-html5-320b3191a6b6
//
app.get("/video", (req, res) => {

    //
    // Original video from here:
    // https://sample-videos.com
    //
    const path = "./SampleVideo_1280x720_1mb.mp4";
    const stat = fs.statSync(path);
    const fileSize = stat.size;
    const range = req.headers.range;
    
    if (range) {
        const parts = range.replace(/bytes=/, "").split("-");
        const start = parseInt(parts[0], 10);
        const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1
        const chunksize = (end-start) + 1;
        const file = fs.createReadStream(path, {start, end});
        const head = {
            "Content-Range": `bytes ${start}-${end}/${fileSize}`,
            "Accept-Ranges": "bytes",
            "Content-Length": chunksize,
            "Content-Type": "video/mp4",
        }
        res.writeHead(206, head);
        file.pipe(res);
    } 
    else {
        const head = {
            "Content-Length": fileSize,
            "Content-Type": "video/mp4",
        };
        res.writeHead(200, head)
        fs.createReadStream(path).pipe(res)
    }
});

app.listen(port, () => {
    console.log(`Microservice listening on port ${port}!`);
});
