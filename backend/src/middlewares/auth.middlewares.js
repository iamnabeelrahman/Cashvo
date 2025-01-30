const jwt = require("jsonwebtoken");
const { User } = require("../models/user.models");

const verifyExistence = async (req, res, next) => {
  const token =
    req.cookies?.accessToken ||
    req.header.authorization?.replace("Bearer ", "");

  if (!token) {
    return res.status(403).json({
      msg: "Invalid access"
    });
  }

  try {
    const decodeToken = jwt.verify(token, process.env.JWT_SECRET);
    if (decodeToken._id) {
      const userDetails = await User.findById(decodeToken?._id).select(
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
    return res.status(403).json({});
  }
};

module.exports = {
  verifyExistence,
};
