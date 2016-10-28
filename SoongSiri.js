// SoongSiri.js
// Based on Node.js
// FirstDate: 2016-10-26
// Latest Modified: 2016-10-29 02:13
// Code by Cellularhacker
// Supervised by Spica
// Operated by Yes_Gimchi
// Version: Beta.1.0
var sleep = require('sleep');
var date = new Date();
var loop = require('node-while-loop');
var Array = require('node-array');

//Functions
function getDateTime() {

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

function getHourTime() {
    var date = new Date();

    var hour = date.getHours();
    hour = (hour <10 ? "0" : "") + hour;

    return hour;
}

// Real Codes
var Bot = new TwitterBot({
  "consumer_secret": "",
    "consumer_key": "",
	"access_token": "",
    "access_token_secret": ""
  });

var List = [  "" ,
              "" ,
              "" , 
              "" ,
              "" ,
              "" ,
              "" ,
              "" , 
              "" , 
              "" , 
              "" , 
              "" , 
              "" , 
              "" ];


var i = 0;
console.log("Running SoongSiri...");
loop.while(function Main () {
  if(i >= 12) {
    process.exit();
  }
  sleep.sleep(617);
  var currentHour = date.getHours();
  if(currentHour >= 9 && currentHour <= 21) {
    var TweetContent = List.pop;
    Bot.tweet(TweetContent);
    console.log("[Tweet][%s] %s", getDateTime(), TweetContent);
    console.log();
    i++;
    sleep.sleep(35983); 
  }
});