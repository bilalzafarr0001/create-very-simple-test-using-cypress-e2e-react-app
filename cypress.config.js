const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "6wtems",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
