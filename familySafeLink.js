const validUrl = require("valid-url");
const isPorn = require("is-porn");
const psl = require("psl");
const extractHostname = require("../utils/extractHostname");
const bannedKeywords = require("../utils/bannedKeywords");

exports.familySafeLink = (url) => {
  console.log("this is a message from familySafe.js");
};
