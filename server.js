const express=require ('express')
const app=express()
const cors=require ('cors')

const dbConfig=require('./db')
const roomsRoute=require('../routes/roomsRoute')
const usersRoute=require('../routes/usersRoute')
app.use(express.json())
app.use(cors())
app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","*")//changesd
    res.header("Access-Control-Allow-Headers",
    "*"
    );
    next();
})
app.use('/api/rooms',roomsRoute)
app.use('/api/users',usersRoute)
const port=process.env.PORT || 5000;
app.listen(port,()=>console.log(`Server running `))