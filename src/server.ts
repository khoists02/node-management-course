require("dotenv").config({ path: ".env" });
import { Application } from "express";
import sequelize from "./config/db";
import User from "./dto/users.dto";
import { v4 as uuidv4 } from "uuid";
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app: Application = express();
import Router from "./routes/router";

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
app.use(cors());

sequelize
  .sync()
  .then((async) => {
    app.use("/", Router.init());
    app.listen(5000);
  })
  .catch((err) => {
    console.log("sync database err", err);
    process.exit();
  });
