const { Account } = require("../models/accounts.models")

const getBalance = async (req, res) => {
    const account = await Account.findOne({
        userId: req.userId
    })

    balance = account.balance

    res.status(200).json({
        success: true,
        balance
    })
}

module.exports ={
    getBalance
}