const express = require("express");

const PostController = require("../controllers/posts");

const router = express.Router();

router.get("", PostController.getPosts);

module.exports = router;
