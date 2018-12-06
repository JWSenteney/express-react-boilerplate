// dev.js -- DO NOT SHARE!!!
// DON'T FORGET TO UPDATE dev.template.js WITH CHANGES
module.exports = {
  // DON'T FORGET TO UPDATE dev.template.js WITH CHANGES
  // Addresses/hostnames/URLs for servers we use
  environment: {
    mongoURI: "mongodb://dev:asdf99@localhost:27017/this-app" // example
  },

  // DON'T FORGET TO UPDATE dev.template.js WITH CHANGES
  // Switches to enable or disable features
  flags: {
    enableEmails: true // example
  },

  // DON'T FORGET TO UPDATE dev.template.js WITH CHANGES
  // API keys and the like
  keys: {
    cookieKey: "Foobarmageddon", // example
    googleClientID: "DANGEROUS-FOR-TEMPLATE-FILE" // example
  },

  // DON'T FORGET TO UPDATE dev.template.js WITH CHANGES
  // Config variables that the front end will use
  // Expect a savvy end user to be able to see these
  ui: {
    somePublicKey: "asdf" // example
  }
};
