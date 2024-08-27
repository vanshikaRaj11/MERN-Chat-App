const express = require("express");
const { registerUser, login, allUsers } = require("../controllers/user.controller");
const upload = require("../utils/multerConfig");
const { auth } = require("../middlewares/authMiddleware");

const router = express.Router();

// router.post("/sign-up", upload.single("pic"), registerUser);
router.route("/sign-up").post(upload.single("pic"), registerUser);
router.post("/login", login);
router.route('/').get(auth,allUsers)
module.exports = router;
