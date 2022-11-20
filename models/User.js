const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = Schema({
  userEmail: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
  },
  country: {
    type: String,
    required: true,
  },
  nationality: {
    type: String,
    required: true,
  },
  courses: [
    {
      type: mongoose.Types.ObjectId,
      ref: "courses",
    },
  ],
  certificates: {
    type: Array,
  },
  wishList: {
    type: Array,
  },
  currentCompany: {
    type: String,
  },
  position: {
    type: String,
    required: true,
  },
  experience: {
    type: Array,
  },
  DOB: {
    type: String,
  },
  payments: {
    type: Array,
  },
  history: {
    type: Array,
  },
  trainerRatings: {
    type: Array,
  },
  activeCourses: {
    type: Array,
  },
  referredBy: {
    type: mongoose.Types.ObjectId,
    ref: "user",
  },
});

module.exports = User = mongoose.model("user", UserSchema);
