/* eslint-disable quotes */
// eslint-disable-next-line quotes
const router = require("express").Router();
const Movie = require("../models/screen");

router.get("/getAll", async (req, res, next) => {
  try {
    const screen = await Screen.find();
    return res.json(screen);
  } catch (err) {
    return next({ status: 400, message: err.message });
  }
});

router.get("/get/:id", async ({ params: { id } }, res, next) => {
  try {
    const found = await Screen.findById(id);
    if (!found) return next({ status: 404, message: `No screen with this id: ${id}` });
    return res.send(found);
  } catch (error) {
    return next({ status: 400, message: error.message });
  }
});

router.get('/find', ({ query }, res, next) => {
  Screen.find(query, (err, screen) => {
    if (err) return next({ status: 400, message: err.message });
    return res.json(screen);
  });
});

module.exports = router;
