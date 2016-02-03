/**
 * Utility methods.
 * @module controllers/utils
*/

import request from 'request';

'use strict';

/** 
 * Helper function for returning JSON from url. Returns a Promise object
   which will in turn resolve with the data returned from the Github API.
 *
 * @param {string} url - The url to query.
 * @return {object} data - JSON response from API.
*/
export function getJSON(url) {
  return new Promise((resolve, reject) => {
    request.get(url, { 'headers': {'User-Agent': 'DrkSephy' }}, 
      (error, response, body) => {
        const data = JSON.parse(body);
        resolve(data);
      });
  });
}
