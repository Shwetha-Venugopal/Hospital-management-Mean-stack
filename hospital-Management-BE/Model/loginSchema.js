const mongoose=require('mongoose')
const  loginSchema=mongoose.Schema({
    userName:{type:String,required:true},
    password:{type:String,required:true},
    email: { type: String, required: true }
})

module.exports=mongoose.model('Login',loginSchema)