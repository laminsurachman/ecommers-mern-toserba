import express from "express";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

const router = express.Router();

//membuat Token

function genereateToken(user) {
  return jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.EXPIRES,
  });
}
//Register
router.post("/register", async (req, res) => {
  try {
    User.register(
      {
        name: req.body.name,
        username: req.body.username,
        phone: req.body.phone,
      },
      req.body.password,
      (err, user) => {
        if (err) {
          return res.status(500).json({ error: err.message });
        } else {
          const token = genereateToken(user);
          res.status(200).cookie("token", token).json({ token });
        }
      }
    );
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error });
  }
});

// Login
router.post("/login", async (req, res) => {
  try {
    passport.authenticate("local", (err, user) => {
      if (err) {
        return res.status(500).json({ message: err.message });
      } else if (!user) {
        return res
          .status(404)
          .json({ message: "Username atau password salah" });
      } else {
        req.login(user, function (err) {
          if (err) {
            return res.status(500).json({ message: err.message });
          }
          const token = genereateToken(user);

          res.status(200).json({ token });
        });
      }
    })(req, res);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

export default router;
