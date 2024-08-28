const express = require("express");
const { auth } = require("../middlewares/authMiddleware");
const { accessChat, fetchChats, createGroupChat,renameGroup, removeFromGroup, addToGroup} = require("../controllers/chat.controller");

const router = express.Router();

router.route("/").post(auth, accessChat);
router.route("/").get(auth, fetchChats);
router.route("/group").post(auth,createGroupChat);
router.route("/rename").put(auth,renameGroup);
router.route("/remove-user").put(auth,removeFromGroup);
router.route("/add-user").put(auth,addToGroup);

module.exports = router;
