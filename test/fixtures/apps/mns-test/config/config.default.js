'use strict';

const AliMNS = require("ali-mns-hs");

module.exports = appInfo => {
  const config = {};

  config.keys = 'aliyun_mns_plugin_for_egg'

  config.mns = {
    default: {
      aliyunAccountId: process.env.aliyunAccountId || "your-account-id",
      aliyunKey: process.env.aliyunKey || "your-key-id",
      aliyunSecret: process.env.aliyunSecret || "your-key-secret",
      region: process.env.region || 'hangzhou',
    },
    mqNames: process.env.aliyun_mqName || ['xticket'],
    GA: true, // enable google analytics data collection
    https: false, // using http or https protocol, default is false for using http protocol.
    app: true,
  };

  return config;
};
