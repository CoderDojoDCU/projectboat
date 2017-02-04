var cron = require('node-cron');
var tweeter = require('../tweets/readtweets');

module.exports = {
  readFromTwitter: function(hashTag) {
    console.log("About to cron the following hashtag "  + hashTag);
    cron.schedule('*/10 * * * * *', function(){
      console.log('running a task every two minutes');
      tweeter.read(hashTag);
    });
  }
}
