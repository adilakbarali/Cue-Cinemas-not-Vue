const router = require("express").Router();
const Booking = require("../models/booking");

router.get("/getAll", async (req, res, next) => {
    try {
        const booking = await Booking.find();
        return res.json(booking);
    } catch (err) {
        return next({ status: 400, message: err.message});
    }
});

router.get("/getLatest", async (req, res, next) => {
    try {
        const booking = await Booking.find().sort({ _id: -1 }).limit(1);
        return res.json(booking);
    } catch (err) {
        return next({ status: 400, message: err.message});
    }
})

router.get("/get/:id", async ({ params: { id }}, res, next) => {
    try{
        const found = await Booking.findById(id);
        if(!found) return next({ status: 404, message: `No booking with this id: ${id}`});
        return res.send(found);
    } catch (error) {
        return next({ status: 400, message: error.message});
    }
});

router.post('/create', ({ body: booking }, res, next) => {
    new Booking(booking).save()
      .then(() => res.status(201).send('Successfully created'))
      .catch((err) => next({ status: 400, message: err.message }));
  });

router.put("/replace/:id", async({ query: newBooking, params: { id }}, res, next) => {
    try{
        await Booking.findByIdAndUpdate(id, newBooking);
        const updatedBooking = await Booking.findById(id);
        return res.status(202).send(updatedBooking);
    }catch (error) {
        return next({ status: 400, message: error.message});
    }
});

router.delete("/remove/:id", ({ params: { id }}, res, next) => {
    Booking.findByIdAndDelete(id, (err) => {
        if (err) return next({ status: 400, message: err.message});
        return res.sendStatus(204);
    });
});

module.exports = router;