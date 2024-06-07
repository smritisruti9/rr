import axios from "axios";
import React,{useEffect,useState} from 'react';
import Loader from "../components/Loader";
import Error from "../components/Error";
import Room from "../components/Room";
const Homescreen=()=>{
    const [rooms,setrooms]=useState([]);
    const[loading,setloading]=useState(false)
    const [error,seterror]=useState()
    useEffect(()=>{
        setloading(true)
        fetch("http://localhost:5000/api/rooms/getallrooms")
        .then((response)=>response.json())
        .then((rooms)=>{
            console.log(rooms);
            setrooms(rooms);
            setloading(false)
        })
        .catch((err)=>{
            seterror(true)
            console.log(err.message)
            setloading(false)
        })
    },[]);
    return(
        <div className="container">                        
<div class="input-group">
  <div class="form-outline">
    <input id="search-input" type="search" id="form" class="form-control" />
    <label class="form-label" for="form1">Search</label>
  </div>
  <button id="search-button" type="button" class="btn btn-primary">
    <i class="fas fa-search"></i>
  </button>
</div>
            <div className="row justify-content-center mt-5">
            {loading ?(<Loader/>):error ?(<Error/>):(rooms.map(room=>{
                return <div className="com-md-9 mt-2">
                    <Room room={room}/>
                    </div>
                })
                )}
        </div>
        </div>
    )}
    export default Homescreen;
    
    


