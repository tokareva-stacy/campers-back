import mongoose from "mongoose";

const ReviewSchema = new mongoose.Schema({
  reviewer_name: String,
  reviewer_rating: Number,
  comment: String,
});

const GallerySchema = new mongoose.Schema({
  thumb: String,
  original: String,
});

const CamperSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  name: String,
  price: Number,
  rating: Number,
  location: String,
  description: String,
  form: String,

  length: String,
  width: String,
  height: String,
  tank: String,
  consumption: String,

  transmission: String,
  engine: String,

  AC: Boolean,
  bathroom: Boolean,
  kitchen: Boolean,
  TV: Boolean,
  radio: Boolean,
  refrigerator: Boolean,
  microwave: Boolean,
  gas: Boolean,
  water: Boolean,

  gallery: [{ thumb: String, original: String }],
  reviews: [
    {
      reviewer_name: String,
      reviewer_rating: Number,
      comment: String,
    },
  ],
});

export default mongoose.model("Camper", CamperSchema);