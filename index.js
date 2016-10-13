var request = require('request');

function urlExists(url, cb) {
  request({ 
    url: url, 
    method: 'HEAD',
    headers: { 'User-Agent': 'url-exists' }
  }, function(err, res) {
    if (err) return cb(err, false);
    cb(null, /4\d\d/.test(res.statusCode) === false);
  });
}

module.exports = urlExists;
