/* eslint-disable quotes */
// eslint-disable-next-line quotes
const router = require("express").Router();
const Movie = require("../models/movie");

router.get("/getAll", async (req, res, next) => {
  try {
    const movie = await Movie.find();
    return res.json(movie);
  } catch (err) {
    return next({ status: 400, message: err.message });
  }
});

router.get("/get/:id", async ({ params: { id } }, res, next) => {
  try {
    const found = await Movie.findById(id);
    if (!found) return next({ status: 404, message: `No movie with this id: ${id}` });
    return res.send(found);
  } catch (error) {
    return next({ status: 400, message: error.message });
  }
});

router.get('/find', ({ query }, res, next) => {
  Movie.find(query, (err, movie) => {
    if (err) return next({ status: 400, message: err.message });
    return res.json(movie);
  });
});

module.exports = router;
