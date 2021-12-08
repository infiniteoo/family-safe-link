# NODE.JS - Determining Unworthy Domains

### About

Expanding upon the existing npm package 'is-porn' (https://github.com/ishan-marikar/is-porn), which queries the OpenDNS 'FamilyShield' resolver via nslookup, then returns a true or false value if a given domain is a pornographic website, this package returns a boolean value of a website URL if it is a family friendly domain.

### Installation

```
npm install family-safe-link

```

### Usage

```
const { familySafeLink } = require("family-safe-link");

const websiteURL = "https://www.pornhub.com"

if (familySafeLink(websiteURL)) {
  console.log("safe");
} else {
  console.log("unsafe");
}

```

### TO DO LIST

- Expand unsafe resource database to include domain names from designated hate groups from the SPLC database
- Search submitted link for banned keywords
- Add more tests to the package
- Add more keywords to banned keyword list
