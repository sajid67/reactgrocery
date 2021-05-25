const express=require('express');
const Model = require('../model/grocModel');
const router= express.Router();

router.get("/",async(req,res)=>{
    try {
        const Products = await Model.find({});
        res.json(Products)
    } catch (error) {
        console.log("Router error")
    }
})

module.exports = router;