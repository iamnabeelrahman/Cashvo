const { mongoose } = require("mongoose");
const { Account } = require("../models/accounts.models");

const getBalance = async (req, res) => {
  const account = await Account.findOne({
    userId: req.userId,
  });

  balance = account.balance;

  res.status(200).json({
    success: true,
    balance,
  });
};

const transferBalance = async (req, res) => {
  const session = mongoose.startSession();

  session.startTransaction();
  const { amount, to } = req.body;

  const account = await Account.findOne({ userId: req.userId }).session(
    session
  );

  if (!account || account.balance < amount) {
    await session.abortTransaction();
    return res.status(400).json({
      message: "Insufficient Balance",
    });
  }

  const toAccount = await Account.findOne({ userId: to }).session(session);

  if (!toAccount) {
    await session.abortTransaction();
    return res.status(400).json({
      message: "Invalid account",
    });
  }

  // Perform the transfer
  await Account.updateOne(
    { userId: req.userId },
    { $inc: { balance: -amount } }
  ).session(session);
  await Account.updateOne(
    { userId: to },
    { $inc: { balance: amount } }
  ).session(session);

  // Commit the transaction
  await session.commitTransaction();

  res.json({
    message: "Transfer successful",
  });
};

module.exports = {
  getBalance,
  transferBalance,
};
