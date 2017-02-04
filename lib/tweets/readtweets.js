

var twitter = require('../../config/twit');
var cache = require('../redis');

var idKey = "MAX_TWEET_KEY";
var scoreKey = "SCORE";


module.exports = {
  read: function(hashTag) {
    var queryString = hashTag;
    cache.get(hashTag+"_"+idKey, function (lastId) {
      console.log(lastId);
      if(lastId)
        queryString += " since_id:"+lastId;
        console.log(queryString);
      twitter.get('search/tweets', { q: queryString, count: 100 }, function(err, data, response) {
        console.log("FOUND "+ data.statuses.length);
        for(var i = 0; i < data.statuses.length; i++) {
          console.log(data.statuses[i].text);
        }
        if(data.statuses.length > 0) {

          for(var i = 0; i < data.statuses.length; i++) {
            console.log(data.statuses[i].text);
          }

          cache.set(hashTag+"_"+idKey, data.statuses[0].id);
          cache.set(hashTag+"_"+scoreKey, data.statuses.length);
        }
      });
    });
  }
}
