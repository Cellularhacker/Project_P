// SoongSiri.js
// Based on Node.js
// FirstDate: 2016-10-26
// Latest Modified: 2016-10-31 17:35
// Code by Cellularhacker
// Supervised by Spica
// Operated by Yes_Gimchi
// Version: Beta.1.1.1
var sleep = require('sleep');
var date = new Date();
var loop = require('node-while-loop');
var arr = require('./mentlist.js').arr;
var fs = require('fs');
var TwitterBot = require("node-twitterbot").TwitterBot;


//Initilize
var Bot = new TwitterBot("./config.json");

//Functions
function getDateTime() {  //This function is made for time stamp.

    var date = new Date();

    var hour = date.getHours();
    hour = (hour < 10 ? "0" : "") + hour;

    var min  = date.getMinutes();
    min = (min < 10 ? "0" : "") + min;

    var sec  = date.getSeconds();
    sec = (sec < 10 ? "0" : "") + sec;

    var year = date.getFullYear();

    var month = date.getMonth() + 1;
    month = (month < 10 ? "0" : "") + month;

    var day  = date.getDate();
    day = (day < 10 ? "0" : "") + day;

    return year + "-" + month + "-" + day + "_" + hour + ":" + min + ":" + sec;
}

function getHourTime() {  // This function is made for Daytime;available to tweet.
    var date = new Date();

    var hour = date.getHours();
    hour = (hour <10 ? "0" : "") + hour;

    return hour;
}

// Real Codes
console.log("Running SoongSiri...");
var currentHour = date.getHours();
    
  fs.open('./log.txt', 'a+', function(err, fd) {

  for(var for_i = 0; for_i<arr.length; for_i++){
    var TweetContent = arr[for_i];
    var CurrentTime = getDateTime();

    if(currentHour >= 9 && currentHour <= 21) {
      // Record File and Tweet the Content.
      if(err) throw err;
      var buf = '[Tweet][' + CurrentTime + '] ' + TweetContent + '\n';
      fs.write(fd, buf, 0, buf.length, null, function(err, written, buffer) {
        if(err) throw err;
        console.log(err, written, buffer);
        fs.close(fd);
      });
      Bot.Tweet(TweetContent);  // Tweet!
      console.log(buf); // Print to console.

      // Sleep Process for Next Tweet.
      console.log("");
      sleep.sleep(35983);
    } else {  // Wait for specific time...
      var sleepTime = 617;
      sleep.sleep(sleepTime);
      var buf = '[Sleep][' + CurrentTime + '] Waits for' + sleepTime + "seconds..";

      console.log(buf); //logging to file.

      fs.write(fd, buf, 0, buf.length, null, function(err, written, buffer) {
        if(err) throw err;
        console.log(err, written, buffer);
        fs.close(fd);
      });
    }
  }
});
