const mongoose = require("mongoose");
const { Schema } = mongoose;

mongoose.connect("mongodb+srv://admin-1:root@cluster0.06yd2.mongodb.net/test?retryWrites=true&w=majority", {
  useNewUrlParser: true,
});

const discussionSchema = new Schema({
    full_name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    movie_id: {
        type: String,
        required: false,
    },
    rating: {
        type: Number,
        requied: false,
    },
    message: {
        type: String,
        required: true,
    }
  });

module.exports = mongoose.model("Discussion", discussionSchema);