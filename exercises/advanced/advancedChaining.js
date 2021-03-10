/**
 * Your task is to write a function that uses a deep learning
 * algorithm to determine the common set of concepts between
 * multiple github profile pictures
 *
 * Given an array of github handles, searchCommonConceptsFromGitHubProfiles should:
 *   1) get the public profile associated with each handle
 *   2) extract the avatar_url of each profile
 *   4) get the set of concepts for each avatar_url (requires API key)
 *   5) find the intersection of the concepts
 *
 * Much of the heavy lifting has been done already in `lib/advancedChainingHelpers`,
 * you just have to wire everything up together! Once you pass this one, you'll
 * be a promise chaining master! Have fun!
 */
var Clarifai = require('clarifai');
var request = require('request');
var Promise = require('bluebird');


var searchCommonConceptsFromGitHubProfiles = function (githubHandles) {
  //loop through array of handles
  var promiseArray = []
  var urlTagArray = []
  githubHandles.forEach(handle => {
    promiseArray.push(getGitHubProfile(handle))
    return promiseArray
  })

  return Promise.all(promiseArray) //get public profile from each handle
    .then(simpleProfile => {
      urlTagArray.push(predictImage(simpleProfile.avatarUrl).then(val => val))
      return urlTagArray
    }) //extract avatar_url //get concepts from avatar_url
    .then(urlTagArray => {
      console.log(urlTagArray)
      getIntersection(urlTagArray)}) //find interestion

};


var Promise = require('bluebird');
var lib = require('../../lib/advancedChainingLib');
var predictImage = lib.predictImage
//  predictImage(imageUrl) =>
//    @param {String} imageUrl - the url of the image you want to tag
//    @return {Promise} - resolves with an array of tags

var getIntersection = lib.getIntersection
//  getIntersection(arrays) =>
//    @param {Array} arrays - an array of arrays, each containing a set of values
//    @return {Array} - a single array with the intersection of values from all arrays

var getGitHubProfile = lib.getGitHubProfile
//   getGitHubProfile(handle) =>
//     @param {String} handle - the handle of a GitHub user
//     @return {Promise} - resolves with the user's profile in the following format:
//       {
//         handle: 'danthareja',
//         name: 'Dan Thareja',
//         avatarUrl: 'https://avatars.githubusercontent.com/u/6980359?v=3.jpg'
//       }

// We're using Clarifai's API to recognize concepts in an image into a list of concepts
// Visit the following url to sign up for a free account
//     https://developer.clarifai.com/login/
// Then, create a new API Key and add your API key to the
// `advancedChainingLib.js` file. When creating an API key, you can give it
// the `Predict on Public and Custom Models` scope


// Export these functions so we can unit test them
module.exports = {
  searchCommonConceptsFromGitHubProfiles,
};
