const mongoose=require('mongoose');

const GrocerSchema = mongoose.Schema({
    title:{
        type:String,
    },
    type:{
        type:String,
    },
    description:{
        type:String,
    },
    image:{
        type:String,
    },
    height:{
        type:Number,
    },
    width:{
        type:Number,
    },
    price:{
        type:Number,
    },
    rating:{
        type:Number,
    },
    qty:{
        type:Number,
    },
})

const Grocery = mongoose.model('grocery',GrocerSchema)
module.exports=Grocery;