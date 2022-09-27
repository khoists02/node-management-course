require('dotenv').config({ path: ".env" });
import { NextFunction, Request, Response } from "express";
import { sequelize } from "./config/db";

const path = require('path');
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req: Request, res: Response) => {
    res.send('hello world')
  })

sequelize.sync().then(() => {
    console.info("Connect db success !!!");
    console.info("Open port 3000 for application !!!");
    app.listen(3000);
}).catch((err) => {
    console.error("connect error with ", err)
})