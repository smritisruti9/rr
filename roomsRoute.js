//const { response } = require('express')
//const { response } = require('express')
const express=require('express')
const router=express.Router()
const Room=require('../models/room')
router.get("/getallrooms",async(req,res)=>{
    try{
  const rooms=await Room.find({})
  res.send(rooms)
  
    }
    catch(error){
      
return res.status(400).json({message:error})
    }
 
});
router.post("/getroombyid ",async(req,res)=>{
  const roomid=req.body.roomid
  try{
const room=await Room.findOne({})
 res.send(room)

  }
  catch(error){
    
return res.status(400).json({message:error})
  }

})
module.exports=router;