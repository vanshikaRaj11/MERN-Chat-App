const asyncHandler = require("express-async-handler");
const User = require("../models/user.model");
const generateToken = require("../config/generateToken");
const uploadImage = require("../utils/uploadImage");

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  console.log(req.body);

  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please Enter all the fields");
  }
  let picUrl;
  let profilePic = req.file
  if (profilePic) {
    try {
      picUrl = await uploadImage(req.file);
      pic = picUrl;
    } catch (error) {
      console.error(error.message);
      res.status(500);
      throw new Error("Image upload failed");
    }
  }
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const user = await User.create({
    name,
    email,
    password,
    pic: picUrl,
  });
  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      pic: user.pic,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Failed to create user");
  }
});

const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      pic: user.pic,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid Email or Password");
  }
});
module.exports = { registerUser, login };
