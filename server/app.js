require("express-async-errors");
const bodyParser = require("body-parser");
const compression = require("compression");
const express = require("express");
const app = express();

// middlewares
const requestLogger = require("./middlewares/request-logger-middleware");
const errorHandler = require("./middlewares/error-handler-middleware");
// routers
const todosRouter = require("./modules/todos/client/todos-router");

process.on("unhandledRejection", (reason, _) => {
  console.log("Unhandled Rejection", reason.message);
  throw reason;
});

process.on("uncaughtException", (error) => {
  console.log("Uncaught Exception", error.message);
  throw error;
});

app.use([requestLogger, compression(), bodyParser.json()]);
app.use("/", express.static("../client/build"));
app.use("/todos", todosRouter);
app.use(errorHandler);

module.exports = app;
