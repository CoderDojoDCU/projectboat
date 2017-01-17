

var twitter = require('../../config/twit');
var cache = require('../redis');

var idKey = "MAX_TWEET_KEY";
var scoreKey = "SCORE";


module.exports = {
  read: function(hashTag, sinceId) {
    var queryString = hashTag;
    if(sinceId)
      queryString += " since_id:"+sinceId;
    twitter.get('search/tweets', { q: queryString, count: 100 }, function(err, data, response) {
      console.log(data.statuses.length);
      if(data.statuses.length > 0) {
        cache.set(hashTag+"_"+idKey, data.statuses[0].id);
        cache.set(hashTag+"_"+scoreKey, data.statuses.length);

        cache.get(hashTag+"_"+scoreKey, function(resp) {
            process.exit(1);
        });
      }
    });
  }
}
