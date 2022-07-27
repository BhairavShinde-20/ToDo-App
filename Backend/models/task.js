const mongoose = require("mongoose");

// create schema ( format ) for database
const userSchema = new mongoose.Schema({
    taskName:String,
    date:Date,
    categoriesName:String
})
module.exports =  mongoose.model("task",userSchema); 