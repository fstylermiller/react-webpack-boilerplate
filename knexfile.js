'use strict';

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/domod'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};
