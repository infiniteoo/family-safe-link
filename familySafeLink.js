const validUrl = require("valid-url");
const isPorn = require("is-porn");
const psl = require("psl");
const extractHostname = require("./utils/extractHostname");
const bannedKeywords = require("./utils/bannedKeywords");

exports.familySafeLink = (longUrl) => {
  if (validUrl.isUri(longUrl)) {
    // make sure url is not porn or on banned list
    isPorn(psl.get(extractHostname(longUrl)), async (err, status) => {
      if (err) throw err;

      if (status) {
        console.log("this is an unworthy link for our site");
        return false;
      } else {
        console.log("this is not a porn site");

        // if returns false, then search extractedHostname for keywords

        bannedKeywords.forEach((keyword) => {
          if (psl.get(extractHostname(longUrl)).includes(keyword)) {
            console.log(
              `contains banned keyword: ${keyword}. this is an unworthy link for our site`
            );

            return false;
          } else {
            return true;
          }
        });
      }
    });
  } else {
    console.log(`valid-url defines "${longUrl}" as an invalid long url`);

    return false;
  }
};
