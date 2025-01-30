const mongoose = require("mongoose")
const { User } = require("./user.models")

const accountSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    balance: {
        type: Number,
        required: true
    }
},   { timestamps : true } 

)

// Pre-save hook to ensure balance is not negative
accountSchema.pre('save', function (next) {
    if (this.balance < 0) {
      throw new Error('Balance cannot be negative');
    }
    next();
  });
  
  // Instance method for deposit
  accountSchema.methods.deposit = function (amount) {
    if (amount > 0) {
      this.balance += amount;
      return this.save();
    } else {
      throw new Error('Deposit amount must be positive');
    }
  };
  
//   // Static method to find by userId
//   accountSchema.statics.findByUserId = function (userId) {
//     return this.findOne({ userId });
//   };
  
//   // Virtual field for formatted balance
//   accountSchema.virtual('formattedBalance').get(function () {
//     return `$${this.balance.toFixed(2)}`;
//   });

const Account = mongoose.model("Account", accountSchema);

module.exports = { Account };