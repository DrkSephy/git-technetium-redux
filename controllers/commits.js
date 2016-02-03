'use strict';

module.exports = (app, request) => {
  app.get('/api/commits', (req, res) => {
    request.get('https://api.github.com/repos/DrkSephy/git-technetium/contributors', 
      { 'headers': {'User-Agent': 'DrkSephy' }},
      (error, response, body) => {
        res.send(body);
      });
  });
}