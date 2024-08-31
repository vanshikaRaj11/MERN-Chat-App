
const express = require('express')
const upload = require("../utils/multerConfig");
const { auth } = require("../middlewares/authMiddleware");
const { sendMessage, allMessages } = require("../controllers/message.controller");


const router = express.Router();

router.route('/').post(auth, sendMessage)
router.route("/:chatId").get(auth, allMessages);

module.exports = router;
