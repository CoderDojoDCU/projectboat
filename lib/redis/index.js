var redis = require("redis");

var options = {};
options.port=32768;

var client = redis.createClient(options);

module.exports = {
  set: function(key, value) {
    client.set(key, value, redis.print);
  },
  get: function(key, callback) {
    client.get(key, function (err, reply) {
      callback(reply);
    });
  }
}
