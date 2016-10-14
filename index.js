var request = require('request');

function urlExists(url, cb) {
  var headers = { "Accept": "text/html", "User-Agent": "Mozilla/5.0" };
  request({ 
    url: url, 
    method: 'GET',
    headers: headers
  }, function(err, res) {
    if (err) return cb(err, false);
    cb(null, /4\d\d/.test(res.statusCode) === false);
  });
}

module.exports = urlExists;
