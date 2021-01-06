const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const fs = require("fs");
const ad_processing = require("./processing/ad-processing");
const paywall_processing = require("./processing/paywall-processing");
const FuzzyMatching = require("fuzzy-matching");
const blacklist = [];

//Middleware
var cors = require("cors");
var bodyparser = require("body-parser");
app.use(cors());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

//Start Node JS server on port 3000
app.listen(port, () => {
  console.log(`Listening on ${port}`);

  /*Pre-loading blacklist into FuzzySearch object*/
  start = new Date().getTime();
  const blacklistdata = fs.readFileSync(
    "./blacklist-data/ad-blacklist-full.txt",
    "UTF-8"
  );
  const lines = blacklistdata.split(/\r?\n/);
  lines.map((item) => blacklist.push(item));
  global.fm = new FuzzyMatching(blacklist);
  end = new Date().getTime();
  console.log("Pre-loaded the blacklist in: ", (end - start) / 1000, "secs");
});

/* Creates new HTTP server for socket */
var socketServer = require("http").createServer(app);
const io = require("socket.io")(socketServer, {
  cors: {
    origin: "*",
  },
});

/* Listen for socket connection on port 3002 */
socketServer.listen(3002, function () {
  console.log("Socket server listening on : 3002");
});

/* This event will emit when client connects to the socket server */
io.on("connection", function (socket) {
  console.log("Socket connection established");

  socket.on("ad-socket", function (data) {
    console.log("Data received for AD-SOCKET...");
    const returnData = ad_processing.process(data);
    console.log("Data being returned for AD-SOCKET...");
    socket.emit("ad-socket-response", returnData);
  });

  socket.on("paywall-socket", function (data) {
    console.log("Data received for PAYWALL-SOCKET...");
    const returnData = paywall_processing.process(data);

    try {
      if (data[1] == 0) {
        //Returning general list of selectors.
        socket.emit("paywall-socket-response", returnData[0]);
      } else {
        //Returning site-specific code for the most stubborn of paywalls
        socket.emit("paywall-socket-response-code", returnData[0]);
      }
      console.log("Data being returned for PAYWALL-SOCKET...");
    } catch (e) {
      console.log("Empty response.");
    }
  });
});
