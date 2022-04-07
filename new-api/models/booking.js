const mongoose = require("mongoose");
const { Schema } = mongoose;



const bookingSchema = new Schema({
    screen_id: {
        type: String,
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