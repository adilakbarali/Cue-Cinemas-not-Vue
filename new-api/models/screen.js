const mongoose = require("mongoose");
const { Schema } = mongoose;



const screenSchema = new Schema({
    screen_type: {
        type: String,
        required: true,
    },
    date_time: {
        type: Date,
        required: true,
    },
    movie_id: {
        type: String,
        requied: true,
    },
    total_seats: {
        type: Number,
        required: true,
    },
    available_seats: {
        type: Number,
        required: true,
    }
  });

module.exports = mongoose.model("Screen", screenSchema);