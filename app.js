var Twit = require('twit')

var projectBoatTwitter = new Twit({
  consumer_key:         '',
  consumer_secret:      '',
  access_token:         '',
  access_token_secret:  '',
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
});

projectBoatTwitter.get('search/tweets', { q: 'projectboat since:2012-04-01', count: 100 }, function(err, data, response) {
  console.log(data)
});
