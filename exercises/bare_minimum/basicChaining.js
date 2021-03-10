/*
 * Write a function WITH NO CALLBACKS that,
 * (1) reads a GitHub username from a `readFilePath`
 *     (the username will be the first line of the file)
 * (2) then, sends a request to the GitHub API for the user's profile
 * (3) then, writes the JSON response of the API to `writeFilePath`
 *
 * HINT: We exported some similar promise-returning functions in previous exercises
 */

var fs = require('fs');
var Promise = require('bluebird');

//other promises we wrote
var promiseConstructor = require('../../exercises/bare_minimum/promiseConstructor.js');
var pluckFirstLineFromFileAsync = promiseConstructor.pluckFirstLineFromFileAsync;
var promisification = require('../../exercises/bare_minimum/promisification.js');
var getGitHubProfileAsync = promisification.getGitHubProfileAsync;

var writeFileAsync = Promise.promisify(fs.writeFile)

var fetchProfileAndWriteToFile = function(readFilePath, writeFilePath) {
  //get the first line
  //get git hub
  //write to json
  //var dummyFunction = () => {}
  return pluckFirstLineFromFileAsync(readFilePath)
    .then(user => getGitHubProfileAsync(user))
    .then(jsonResponse => writeFileAsync(writeFilePath, JSON.stringify(jsonResponse)))
};

// (infoFromCB, infoTwo) => console.log(infoFromCB, infoTwo)

// Export these functions so we can test them
module.exports = {
  fetchProfileAndWriteToFile: fetchProfileAndWriteToFile
};
