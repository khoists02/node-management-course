require("dotenv").config({ path: ".env" });
import { Application } from "express";
import sequelize from "./config/db";
import cors, { CorsOptions } from "cors";
const express = require("express");
const bodyParser = require("body-parser");
const app: Application = express();
import Router from "./routes/router";

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// const corsOption: CorsOptions = {
//   allowedHeaders: ["https://local.test.node"],
// };

sequelize
  .authenticate()
  .then(() => {
    app.use(cors());
    app.use("/", Router.init());
    app.listen(5000);
  })
  .catch((err) => {
    console.log("sync database err", err);
    process.exit();
  });
