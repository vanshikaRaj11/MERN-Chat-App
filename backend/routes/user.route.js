const express = require("express");
const { registerUser, login } = require("../controllers/user.controller");
const upload = require("../utils/multerConfig");

const router = express.Router();

// router.post("/sign-up", upload.single("pic"), registerUser);
router.route("/sign-up").post(upload.single("pic"), registerUser);
router.post("/login", login);

module.exports = router;
