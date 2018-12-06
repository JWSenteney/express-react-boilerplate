module.exports = {
  environment: {
    mongoURI: process.env.MONGO_URI
  },
  flags: {
    enableEmails: process.env.DISABLE_EMAILS
  },
  keys: {
    cookieKey: process.env.COOKIE_KEY,
    googleClientID: process.env.GOOGLE_CLIENT_ID
  },
  ui: {
    somePublicKey: process.env.SOME_PUBLIC_KEY
  }
};
