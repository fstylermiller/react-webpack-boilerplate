'use strict';

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/change_me_in_knexfile.js'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};
