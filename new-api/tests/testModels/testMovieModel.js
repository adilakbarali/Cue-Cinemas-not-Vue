const { text } = require("body-parser");
const mongoose = require("mongoose");
const { Schema } = mongoose;

mongoose.connect("mongodb+srv://admin-1:root@cluster0.06yd2.mongodb.net/test?retryWrites=true&w=majority", {
  useNewUrlParser: true,
});

const movieSchema = new Schema({
    title: {
      type: String,
      required: true,
    },
    release_date: {
      type: Date,
      required: true,
    },
    actors: {
      type: Array,
      required: true,
    },
    director: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    images: {
      type: Array,
      required: true,
    }
  });

  module.exports = mongoose.model("Movie", movieSchema);