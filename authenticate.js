'use strict';

const jwt = require('jsonwebtoken');

const myjwt = function(req, res, next) {
  jwt.verify(req.cookies.token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.sendStatus(401);
    }

    req.token = decoded;
    next();
  });
}

module.exports = myjwt;
