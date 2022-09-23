import { sequelize } from "./config/db"
const path = require('path');
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

sequelize.sync().then(() => {
    console.log("connect db success !!");
    app.listen(3000);

}).catch((err) => {
    console.log("connect error with ", err)
})