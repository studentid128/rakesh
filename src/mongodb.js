const mongoose=require("mongoose")
mongoose.connect("mongodb://localhost:27017/6627")
.then(()=>{
    console.log("Mongo db connected")
})
.catch(()=>{
    console.log("failed")
})

const LoginSchema=new mongoose.Schema({
    name:String,
    password:String,
})

const collection=new mongoose.model("Rakesh",LoginSchema)
module.exports=collection
