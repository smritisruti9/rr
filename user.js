const mongoose=require('mongoose')
const userSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:Number,
        required:true
    },
    password:{
        type:Number,
        required:true
    },
    isAdmin:{
        type:Boolean,
        default:false
    },
    
},{
   timestamps:true, 
})
const userModel=mongoose.model('users',userSchema)
module.exports=userModel;