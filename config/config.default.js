'use strict';

const  AliMNS = require("ali-mns-hs");

module.exports = appInfo => {
  const config = {};

  config.mns = {
    default: {
      aliyunAccountId: process.env.aliyunAccountId || "your-account-id",
      aliyunKey: process.env.aliyunKey || "your-key-id",
      aliyunSecret: process.env.aliyunSecret || "your-key-secret",
      region: process.env.region || 'hangzhou',
    },
    waitSeconds: 5, // s
    mqNames: process.env.aliyunMqName || [],
    GA: true, // enable google analytics data collection
    https: false, // using http or https protocol, default is false for using http protocol.
    app: true,
    b64Transform: true, // base64 transform while getting and sending messages
  };

  return config;
};
