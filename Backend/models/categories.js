const mongoose = require("mongoose");

// create schema ( format ) for database
const userSchema = new mongoose.Schema({
    categoriesName:String
    
})
module.exports =  mongoose.model("categories",userSchema); 