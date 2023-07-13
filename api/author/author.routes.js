const express = require("express");
const router = express.Router();
const {
  postsCreate,
  authorCreate,
  getAuthors,
} = require("../../api/author/author.controllers");

router.get("/", getAuthors);
router.post("/", authorCreate);

router.post("/:authorId", postsCreate);

module.exports = router;
