/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('request');


// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function (filePath, cb) {
  // TODO
  fs.readFile(filePath, "utf8", function(err, data){
  if (err) cb(err);
  else {
    var lines = data.split('\n');
    cb(err, lines[0]);
  }
});
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function (url, cb) {
request(url, function(err, data){
  if (err) cb(err);
  else {
    cb(null, data.statusCode)
  }


})

};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};
