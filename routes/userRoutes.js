const express = require("express");
const {
  handleLoginUser,
  handleSignUpUser,
  handleLogoutUser,
  handleGetAllUserInfo
} = require("../controllers/userController");
const router = express.Router();

router.post("/login", handleLoginUser);
router.post("/signup", handleSignUpUser);
router.get("/", handleGetAllUserInfo);
router.post("/logout", handleLogoutUser);

module.exports = router;