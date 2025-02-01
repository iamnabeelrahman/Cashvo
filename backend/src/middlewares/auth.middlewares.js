const jwt = require("jsonwebtoken");
const { User } = require("../models/user.models");

const verifyExistence = async (req, res, next) => {
  const token =
    req.cookies?.accessToken ||
    req.headers.authorization?.replace("Bearer ", "");

  if (!token) {
    return res.status(403).json({
      msg: "Invalid access",
    });
  }

  try {
    const decodeToken = jwt.verify(token, process.env.JWT_SECRET);

    if (decodeToken?.userId) {
      console.log("token id:  ", decodeToken.userId);
      const userDetails = await User.findById(decodeToken?.userId).select(
        "-password -refreshToken"
      );      

      if (!userDetails) {
        return res.status(403).json({
          success: false,
          message: "Invalid access token",
        });
      }
      req.user = userDetails;
      next();
    }
  } catch (error) {
    console.error("JWT verification error:", error);
    return res.status(403).json({
      msg: "Invalid access token",
      error: error.message, // Optional, useful for debugging
    });
  }
};

module.exports = {
  verifyExistence,
};
