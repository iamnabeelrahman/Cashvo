const { User } = require("../models/user.models");

const searchBulk = async (req, res) => {
  const filter = req.quer.filter || "";

  const users = await User.find({
    $or: [
      {
        firstName: {
          $regex: filter,
        },
      },
      {
        lastName: {
          $regex: filter,
        },
      },
    ],
  });

 return res.status(200).json({
    user: users.map((user) => ({
      username: user.username,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      _id: user._id,
    })),
  });
};
