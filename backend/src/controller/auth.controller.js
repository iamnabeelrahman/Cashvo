const { User } = require("../models/user.models");
const { signupSchema, signInSchema } = require("../models/zod/auth.schema");
const jwt = require("jsonwebtoken")

const signupUser = async (req, res) => {
  const body = req.body;

  const parsedData = signupSchema.safeParse(body);

  if (!parsedData) {
    return res.json({
      msg: "Incorrect Input",
    });
  }

  const checkUsername = await User.findOne({
    username: body.username,
  });
  const checkEmail = await User.findOne({
    email: body.email,
  });

  let message = "";

  if (checkUsername) {
    message += "Username already taken";
  }
  if (checkEmail) {
    if (message) {
      message += " "; // Add space if there's already a message
    }
    message += "Email already taken";
  }

  if (message) {
    // console.log(messages.join(", "));
    return res.status(409).json({
      messages: message.trim(),
    });
  }

  const newUser = await User.create(body);
  const token = jwt.sign({
    userId: newUser._id,
  }, process.env.JWT_SECRET, {
    expiresIn: process.env.TOKEN_EXPIRY
  });

  return res.status(200).json({
    success: true,
    message: "User Created Successfuly!",
    user: newUser,
    token: token
  });
};

const siginpUser = (req , res) => {
  const { username, email, password } = req.body;
};
module.exports = {
  signupUser,
};

// {username, email, firstname, lastname, password}
