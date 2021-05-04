require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const models = require("./models/models");
const sequelize = require("./db");
const PORT = process.env.PORT || 8000;
const router = require("./routes/index");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors({ origin: ['http://localhost:3000'], credentials: true }));
app.use("/api", router);
try {
  sequelize.authenticate();
  sequelize.sync();
  console.log("Connection has been established successfully.");
  app.listen(PORT, () => {
    console.log("Server run on port:", PORT);
  });
} catch (e) {
  console.log(e);
}
