/**
 * Gathers Contributions data from Github API.
 * @module controllers/commits
*/

'use strict';

/**
 * GET /api/commits
 * Returns commit data for a given repository.
*/
module.exports = (app, request) => {
  app.get('/api/commits', (req, res) => {
    getJSON('https://api.github.com/repos/DrkSephy/git-technetium/contributors')
    .then((data) => {
      let parsedJSON = [];
      data.forEach((entry) => {
        let contributionData = {};
        contributionData.username = entry.login;
        contributionData.contributions = entry.contributions;
        contributionData.id = entry.id;
        parsedJSON.push(contributionData);
      });
      res.send(parsedJSON);
    });
  });

  /** 
   * Helper function for returning JSON from url.
   *
   * @param {string} url - The url to query.
   * @return {object} data - JSON response from API.
  */
  function getJSON(url) {
    return new Promise((resolve, reject) => {
      request.get(url, { 'headers': {'User-Agent': 'DrkSephy' }}, 
        (error, response, body) => {
          const data = JSON.parse(body);
          resolve(data);
        });
    });
  }
}