/**
 * Gathers Issue data from the Github API.
 * @module controllers/issues
*/

import { getJSON } from './utils';

'use strict';

/**
 * GET /api/issues
 * Returns issue data for a given repository.
*/
module.exports = (app) => {
  app.get('/api/issues', (req, res) => {
    getJSON('https://api.github.com/repos/DrkSephy/git-technetium/issues?state=all')
    .then((data) => {
      res.send(data);
    });
  });
}