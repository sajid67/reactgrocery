const mongoose = require('mongoose');
const MONGO_UR1="mongodb+srv://grocer:shop123@cluster0.4kv2j.mongodb.net/grocershop?retryWrites=true&w=majority";

const connectDB=()=>
{
    try {
        mongoose.connect(MONGO_UR1,{
            useNewUrlParser:true,
            useCreateIndex:true,
            useUnifiedTopology:true,
            useFindAndModify:false
        })
        console.log("Mongoose Connected")
    } catch (error) {
        console.log("mongo error")
    }
}
module.exports=connectDB;