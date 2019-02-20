'use strict';

const AliMNS = require("ali-mns-hs");

module.exports = (...args) => {
  return new AliMNS.Region(...args);
};
