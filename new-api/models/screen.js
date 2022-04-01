const mongoose = require("mongoose");
const { Schema } = mongoose;

mongoose.connect("mongodb+srv://admin-1:root@cluster0.06yd2.mongodb.net/main?retryWrites=true&w=majority", {
  useNewUrlParser: true,
});

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