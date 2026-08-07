const mongoose = require("mongoose");

const cakeSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true
    },

    description:{
        type:String,
        required:true
    },

    price:{
        type:Number,
        required:true
    },

    weight:{
        type:String,
        required:true
    },

    image:{
        type:String,
        required:true
    }

});

module.exports = mongoose.model("Cake",cakeSchema);