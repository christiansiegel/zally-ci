const options = {
  windowEnv: {
    DEBUG: process.env.DEBUG || undefined,
    OAUTH_ENABLED: process.env.OAUTH_ENABLED || undefined,
    ZALLY_API_URL: process.env.ZALLY_API_URL || undefined,
  },
};

const app = require('zally-web-ui')(options);

app.listen(8080, () => {
  console.log('zally-web-ui running at http://localhost:8080');
});