var redis = require("redis");

var options = {};
options.port=9937;
options.host="koi.redistogo.com";
options.password="d14e2bc84966ff4e192fcd689cad29ac";

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
