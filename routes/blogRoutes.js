const express = require("express");
const {
  handleCreateBlog,
  handleGetAllBlog,
  handleDeleteBlog,
  handleUpdateBlog,
} = require("../controllers/blogController");
const router = express.Router();

router.post("/create", handleCreateBlog);
router.post("/delete/:id", handleDeleteBlog);
router.get("/", handleGetAllBlog);
router.post("/update/:id", handleUpdateBlog);

module.exports = router;
