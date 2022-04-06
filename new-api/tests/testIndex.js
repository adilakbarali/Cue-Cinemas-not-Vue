const express = require("express");
const parser = require("body-parser");
const cors = require("cors");
const app = express();

app.use(parser.json());
app.use(cors());

const testBookingRoute = require("./testRoutes/testBookingRoutes");
const testDiscussionRoute = require("./testRoutes/testDiscussionRoutes");
const testScreenRoute = require("./testRoutes/testScreenRoutes");
const testMovieRoute = require("./testRoutes/testMovieRoutes");

app.use((req, res, next) => {
  // eslint-disable-next-line no-console
  console.log(req.method, req.url, new Date());
  return next();
});

app.get("/", (request, response) => {
  response.send("Hello!");
});

app.use("/testmovie", testMovieRoute);

app.use("/testBooking", testBookingRoute);

 app.use("/testscreen", testScreenRoute);

 app.use("/testdiscussion", testDiscussionRoute);

app.use("*", (req, res, next) => next({ status: 404, message: "Invalid URL" }));

app.use((err, req, res) => {
  res.status(err.status).send(err.message);
});

const server = app.listen(4494, () => {
  // eslint-disable-next-line no-console
  console.log("Server successfully started on port", server.address().port);
});

module.exports = server;