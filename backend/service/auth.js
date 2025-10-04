const jwt = require("jsonwebtoken");

// Load secret from .env
const secret = process.env.JWT_SECRET;

const setUser = (user) => {
  try {
    return jwt.sign(
      {
        id: user._id,
        email: user.email,
        role: user.role,
      },
      secret,
      { expiresIn: "7d" } // optional: token expiry
    );
  } catch (err) {
    return null;
  }
};

const getUser = (token) => {
  if (!token) return null;

  try {
    return jwt.verify(token, secret);
  } catch (err) {
    return null;
  }
};

module.exports = {
  setUser,
  getUser,
};
