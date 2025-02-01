const { mongoose } = require("mongoose");
const { Account } = require("../models/accounts.models");

const getBalance = async (req, res) => {
    console.log("COntroller reached controller");
    
  const account = await Account.findOne({
    userId: req.user?._id,
  });

  const balance = account.balance;
  console.log("balance: ",account);
  

  res.status(200).json({
    success: true,
    balance
  });
};

const transferBalance = async (req, res) => {
    const session = await mongoose.startSession();
  
    try {
      session.startTransaction();
  
      const { amount, to } = req.body;
  
      // Find the sender account
      const account = await Account.findOne({ userId: req.user?._id }).session(session);
  
      if (!account || account.balance < amount) {
        // Abort transaction if conditions are not met
        await session.abortTransaction();
        return res.status(400).json({
          message: "Insufficient Balance",
        });
      }
  
      // Find the receiver
      const toAccount = await Account.findOne({ userId: to }).session(session);
  
      if (!toAccount) {
        // Abort transaction if receiver account is invalid
        await session.abortTransaction();
        return res.status(400).json({
          message: "Invalid account",
        });
      }
  
      // Perform transfer
      await Account.updateOne(
        { userId: req.user._id },
        { $inc: { balance: -amount } }
      ).session(session);
  
      await Account.updateOne(
        { userId: to },
        { $inc: { balance: amount } }
      ).session(session);
  
      await session.commitTransaction();
  
      res.json({
        message: "Transfer successful",
      });
    } catch (error) {
      await session.abortTransaction();
      res.status(500).json({
        message: "Error during transaction",
        error: error.message,
      });
    } finally {
      session.endSession();
    }
  };

module.exports = {
  getBalance,
  transferBalance,
};
