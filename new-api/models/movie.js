const mongoose = require("mongoose");
const { Schema } = mongoose;



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