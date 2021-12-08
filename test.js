// test file to test the functionality of the library

const { familySafeLink } = require("./familySafeLink");

if (familySafeLink("https://www.satan.com")) {
  console.log("safe");
} else {
  console.log("unsafe");
}
