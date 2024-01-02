const { app } = require("./src/server.js");
const { config } = require("./src/util/config.js");

app.listen(config.port || 8080, () => {
  console.log(`Listening on http://localhost:${config.port || 8080}`);
});
