const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const appRoutes = require("./routes/app.routes");

const config = dotenv.config({ path: path.join(__dirname, "./.env") });

if (config.error) console.log("[-] dotenv config > " + config.error.message);

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", appRoutes);

// catch 404 and send response
app.use(function (req, res, next) {
  return res.status(404).json({
    status: false,
    result: {},
    message: "not done",
  });
});

module.exports = app;
