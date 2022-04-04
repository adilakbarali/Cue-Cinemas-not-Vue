/* eslint-disable quotes */
const express = require("express");
const parser = require("body-parser");
const cors = require("cors");
const app = express();

app.use(parser.json());
app.use(cors());

const movieRoutes = require("./routes/movieRoutes");
const bookingRoutes = require("./routes/bookingRoutes");
const screenRoutes = require("./routes/screenRoutes");
const discussionRoutes = require("./routes/discussionRoutes");

app.use((req, res, next) => {
  // eslint-disable-next-line no-console
  console.log(req.method, req.url, new Date());
  return next();
});

app.get("/", (request, response) => {
  response.send("Hello!");
});

app.use("/movie", movieRoutes);

app.use("/booking", bookingRoutes);

app.use("/screen", screenRoutes);

app.use("/discussion", discussionRoutes);

app.use("*", (req, res, next) => next({ status: 404, message: "Invalid URL" }));

app.use((err, req, res) => {
  res.status(err.status).send(err.message);
});

const server = app.listen(4494, () => {
  // eslint-disable-next-line no-console
  console.log("Server successfully started on port", server.address().port);
});

module.exports = server;
