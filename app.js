const express = require("express");
const app = express();
const port = process.env.PORT || 4000;
const configRoutes = require("./routes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

configRoutes(app);

app.listen(port, () => {
  console.log("We've now got a server!");
  console.log("Your routes will be running on http://localhost:" + port);
});
