const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema(
  {
    userid:{
      type:String,
      required:true,
    },
    amount: {
      type: Number,
      required: [true, "amount is required"],
    },
    type:{
      type:String,
      required:[true,"select one type"],
    },
    category: {
      type: String,
      required: [true, "category is required"],
    },
    description: {
      type: String,
    },
    date: {
      type: Date,
      required: [true, "date is required"],
    },
  },
  { timestamps: true }
);

const transactionModel = mongoose.model("transactions", transactionSchema);
module.exports = transactionModel;
