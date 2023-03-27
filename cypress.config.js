const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://saucedemo.com",
    "chromeWebSecurity": false,
    defaultCommandTimeout: 5000,
    trashAssetsBeforeRuns: false,
    setupNodeEvents(on, config) {
     // implement node event listeners here

    },
  },
});
