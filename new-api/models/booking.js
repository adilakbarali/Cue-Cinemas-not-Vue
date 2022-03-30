const mongoose = require("mongoose");
const { Schema } = mongoose;

mongoose.connect("mongodb+srv://admin-1:root@cluster0.06yd2.mongodb.net/main?retryWrites=true&w=majority", {
  useNewUrlParser: true,
});

const bookingSchema = new Schema({
    screenId: {
        type: Number,
        required: true,
    },
    full_name: {
        type: String,
        required: true,
    },
    number_of_seats: {
        type: Number,
        required: true,
    },
    number_of_adults: {
        type: Number,
        requied: true,
    },
    number_of_children: {
        type: Number,
        required: true,
    },
    concessions: {
        type: Array,
        required: true,
    }
  });

module.exports = mongoose.model("Booking", bookingSchema);