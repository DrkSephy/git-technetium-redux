/**
 * Gathers Contributions data from Github API.
 * @module controllers/commits
*/

import { getJSON  } from './utils';

'use strict';

/**
 * GET /api/commits
 * Returns commit data for a given repository.
*/
module.exports = (app) => {
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
}