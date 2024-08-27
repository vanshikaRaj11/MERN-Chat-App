const express = require("express");
const { auth } = require("../middlewares/authMiddleware");
const { accessChat, fetchChats } = require("../controllers/chat.controller");

const router = express.Router();

router.route("/").post(auth, accessChat);
router.route("/").get(auth, fetchChats);
// router.route("/group").post(auth.createGroupChat);
// router.route("/rename").put(auth.renameGroup);
// router.route("/group-remove").put(auth.removeFromGroup);
// router.route("/group-add").put(auth.addToGroup);

module.exports = router;
