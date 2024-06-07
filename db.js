const mongoose=require('mongoose')
var mongoURL='mongodb+srv://admin:HRXQuClnauXegQC5@cluster0.1y4jjny.mongodb.net/HotelRooms?retryWrites=true&w=majority'
mongoose.connect(mongoURL,{useUnifiedTopology:true,useNewUrlParser:true})
var connection=mongoose.connection
connection.on('error',()=>{
    console.log('connection failed!')
})
connection.on('connected',()=>{
    console.log('connection successful..')
})
module.exports=mongoose;
