const { defineConfig } = require("cypress");
require('dotenv').config();

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      require('@applitools/eyes-cypress')(on, config);
      return config;
    },
    failCypressAfterAllSpecs: false,
    env: {
      APPLITOOLS_API_KEY: process.env.APPLITOOLS_API_KEY,
    }
  },
});
