import React,{useState,useEffect}from "react"
import Room from "../components/Room";
import { useLocation } from "react-router-dom";
import axios from 'axios'
import { useParams } from "react-router-dom";
const Bookingscreen=()=>{
    const [loading,setloading]=useState(true)
    const[error,seterror]=useState()
    const[room,setroom]=useState();
    const location=setloading()
    useEffect(()=>{
        fetchData();
    },[])
        const fetchData=async()=>{
            const path=location.pathname.split("/",5)[4]
            setloading(true)
         try {
            const res=await axios.get(`http://localhost:5000/api/rooms/${path}`)
            if(res.data){
                setroom(res.data)
                setloading(false)
            }else{
            setroom([])
            setloading(false)
         }
            }
            catch(err){
                setroom([])
                setloading(false)
            }}
            const singleRoom=room.length>0?room.map(({_id,imageUrl,name,desc,category})=>(
        <div key={_id}>
            <div className="row justify-content-md-center mt-4">
                <div className="col-md-6">
                    <img src={imageUrl [0]}alt="singleRoom"/>
                </div>
                <div className="col-md-4">
                    <h2>{name}</h2>
                    <p>{desc}</p>
                    <p>{category}</p>
                
                </div>
            </div>
            </div>))
            :<div>nnno room</div>
return(
    <>
    {loading?<h1>Loading...</h1>:singleRoom}</>
                      
)}
export default Bookingscreen;
/*
function Bookingscreen(){

    const { roomid } = useParams()
    
    const fetchData=async()=>{
    try{
        const response=await fetch("http://localhost:5000/api/rooms/${roomid}")
        const data=await response.json();
        const room=data.filter(room=>room._id===roomid)
        console.log(room)
        
        
    }catch(error){
        console.log('eroor is:',error);
    }
};
useEffect(()=>{
fetchData();
},[])

 // const profile = Data.filter(profile => profile.id === roomid);

  return (
    <div className="analysis">
     <h1>Booking.....{roomid}</h1>
     {room.map(pr => (
    
        <div key={pr.id}>
          <h2>{pr.name}</h2>
          <Room room={room}/>
          
        </div>
         
      ))}
    </div>
  );
}
export default Bookingscreen;
*/