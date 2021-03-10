/**
 * Implement these promise-returning functions.
 * Any successful value should be made available in the next `then` block chained
 * to the function invocation, while errors should be available in the `catch` block
 */

var fs = require('fs');
var request = require('request');
var Promise = require('bluebird');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFileAsync = function(filePath) {
  // TODO
  return firstLinePromise = new Promise((resolve, reject) => {
  fs.readFile(filePath, "utf8", function(err, data){
    if (err) reject(err);
    else {
      var lines = data.split('\n');
      resolve(lines[0]);
  }
  });
  })
};



// This function should retrieve the status code of a GET request to `url`
var getStatusCodeAsync = function(url) {
  return statusPromise = new Promise ((resolve, reject) =>{
    request(url, function(err, data){
      if (err) reject(err);
      else {
        resolve(data.statusCode)
      }
    })
  })
};



// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCodeAsync: getStatusCodeAsync,
  pluckFirstLineFromFileAsync: pluckFirstLineFromFileAsync
};
