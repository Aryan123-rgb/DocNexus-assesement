const User = require("../models/User");
const fs = require("fs");
const jwt = require("jsonwebtoken");

const secret = process.env.SECRET;

const handleLoginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const userDoc = await User.findOne({ email, password });
    if (userDoc) {
      jwt.sign(
        {
          id: userDoc._id,
          name: userDoc.name,
          email: userDoc.email,
          password: userDoc.password,
          pic: userDoc.pic,
        },
        secret,
        {},
        (err, token) => {
          const response = {
            id: userDoc._id,
            name: userDoc.name,
            email: userDoc.email,
            password: userDoc.password,
            pic: userDoc.pic,
            token: token,
          };
          res.cookie("token", token).json(response);
        }
      );
    } else res.status(400).json({ error: "Not found" });
  } catch (error) {
    console.log(error);
    return res.status(500).json('Server error');
  }
};

const handleSignUpUser = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status(400);
    return;
  }
  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400).json("User already exits");
    return;
  }

  try {
    const userDoc = await User.create({
      name: name,
      email: email,
      password: password,
    });
    jwt.sign(
      {
        id: userDoc._id,
        name: userDoc.name,
        email: userDoc.email,
      },
      secret,
      {},
      (err, token) => {
        const response = {
          id: userDoc._id,
          name: userDoc.name,
          email: userDoc.email,
          password: userDoc.password,
          pic: userDoc.pic,
          token: token,
        };
        res.cookie("token", token).json(response);
      }
    );
  } catch (e) {
    console.log(e);
    res.status(400).json(e);
  }
};

const handleGetAllUserInfo = async (req, res) => {
    try {
        const userDoc = await User.find({});
        return res.json(userDoc);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
};

const handleLogoutUser = async (req, res) => {
  res?.cookie("token", "").json("ok");
};

module.exports = {
  handleLoginUser,
  handleSignUpUser,
  handleLogoutUser,
  handleGetAllUserInfo
};
