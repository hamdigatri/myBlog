require("dotenv").config();

const express = require("express");
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");
const session = require("express-session");
const { ExpressOIDC } = require("@okta/oidc-middleware");

const app = new express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Welcome!!</h1>");
});

app.listen(port, () => console.log(`listening to port ${port}`));
