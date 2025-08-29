import mongoose from "mongoose";
import paymentLink from "razorpay/dist/types/paymentLink";

const transactionSchema = new mongoose.Schema({
    clearId:{type:String, required:true},
    plan:{type:String, required:true},
    amount:{type:Number, required:true},
    credits:{type:Number, required:true},
    payment:{type:Boolean,default:false},
    date:{type:Number},
})

const transactionModel = mongoose.model.transaction || mongoose.model('transaction',transactionSchema)

export default transactionModel