const Model = require('./model/grocModel');
const Products=require('./model/Data');
const connectDB=require('./config/db');

connectDB();

const importDB=async()=>
{
    try {
        await Model.deleteMany({});
        await Model.insertMany(Products)
        console.log('Data Imported')
    } catch (error) {
        console.log('Data not Imported')

    }
}
importDB();
