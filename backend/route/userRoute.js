const express = require('express');
const { restrictToLoggedInUserOnly, restrictToRoles } = require('../middleware/auth');

const router = express.Router();

const {handleUserSignUp, HandleUserLogin} = require("../controllers/user")

router.post("/signup", handleUserSignUp);
router.post("/login", HandleUserLogin);

router.get(
    "/admin-only",
    restrictToLoggedInUserOnly,         // must be logged in
    restrictToRoles("admin"),           // must have admin role
    (req, res) => {
        res.json({ msg: "Welcome Admin, you have special access 🚀" });
    }
);

router.get("/home", restrictToLoggedInUserOnly, (req, res) => {
  res.status(200).json({ message: `Welcome ${req.user.email}` });
});

module.exports = router;