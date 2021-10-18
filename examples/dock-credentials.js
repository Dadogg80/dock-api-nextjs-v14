const http = require('../utils/http-utils');

async function createCredential(credential, issuer) {
  const wrapped = {
    credential,
    issuer: {
      id: issuer.data.hexDID,
    },
  };
  return http.sendAndLog(() => http.post('credentials/', wrapped));
}

module.exports = {
  createCredential,
};
