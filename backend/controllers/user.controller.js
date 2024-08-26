const asyncHandler = require("express-async-handler");
const User = require("../models/user.model")

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, pic } = req.body;

  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please Enter all the fields");
    }
    
    const userExistst = await User.findOne({email})
});
