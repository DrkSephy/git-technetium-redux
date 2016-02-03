'use strict';

module.exports = (app, request) => {
  app.get('/api/commits', (req, res) => {
    getJSON('https://api.github.com/repos/DrkSephy/git-technetium/contributors')
    .then((data) => {
      let parsedJSON = [];
      data.forEach((entry) => {
        let contributionData = {};
        contributionData.username = entry.login;
        contributionData.contributions = entry.contributions;
        parsedJSON.push(contributionData);
      });
      res.send(parsedJSON);
    });
  });

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