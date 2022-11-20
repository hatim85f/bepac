const express = require("express");
const router = express.Router();
const User = require("../models/User");

// getting user data for his own purpose
router.get("/", async (req, res) => {
  try {
    const user = await User.findOne({ userEmail: req.query.userEmail });

    if (!user) {
      return res.status(500).send({
        error: "Error !",
        message: "Invalid Username or Password",
      });
    }

    return res.status(200).json({ user });
  } catch (err) {
    return res.status(500).send({
      error: "Error Occured !",
      message: err.message,
    });
  }
});

// posting users data to the server
router.post("/", async (req, res) => {
  try {
    const { userDetails } = req.body;

    const newUser = new User({
      userEmail: userDetails.userEmail,
      firstName: userDetails.firstName,
      lastName: userDetails.lastName,
      image: userDetails.image,
      phone: userDetails.phone,
      gender: userDetails.gender,
      country: userDetails.country,
      nationality: userDetails.nationality,
      courses: userDetails.courses,
      certificates: userDetails.certificates,
      wishList: userDetails.wishList,
      currentCompany: userDetails.currentCompany,
      position: userDetails.position,
      experience: userDetails.experience,
      DOB: userDetails.DOB,
      payments: userDetails.payments,
      hsitory: userDetails.hsitory,
      trainerRatings: userDetails.trainerRatings,
      activeCourses: userDetails.activeCourses,
      referredBy: userDetails.referredBy,
    });

    await User.insertMany(newUser);

    return res.status(200).send("Your data added Successfully");
  } catch (err) {
    return res.status(500).send({
      error: "Error Occured !",
      message: err.message,
    });
  }
});

module.exports = router;
