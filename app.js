var tweetreader = require('./lib/tweets/readtweets');
var tweetcron = require('./lib/cron')

tweetreader.read("COOLESTPROJECTS");
tweetcron.readFromTwitter("DCU");
