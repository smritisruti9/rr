import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../components/Loader";
import { Tabs } from "antd"
const TabPane={Tabs}
function Adminscreen() { 
  return (
    <div className="mt-4 ml-4 bs">
      <h2 className="text-center">AdminPanel</h2>


  <Tabs defaultActiveKey="1" >
    <TabPane tab="Rooms" key="1">
      <Rooms/>
    </TabPane>
    <TabPane tab="Add Rooms" key="2">
      <Addroom/>
    </TabPane>
    <TabPane tab="Users" key="3">
      Content of Tab Pane 3
    </TabPane>
  </Tabs>,
 

      </div>
  );
}

export default Adminscreen;

export function Rooms() {
  const [rooms, setrooms] = useState([true]);
  const [loading, setloading] = useState([true]);
  const [error, seterror] = useState([true]);
  useEffect(() => {
    fetch("http://localhost:5000/api/rooms/getallrooms")
      .then((response) => response.json())
      .then((rooms) => {
        setrooms(rooms);
      })
      .catch((error) => {
        console.log(error);
        setloading(false);
        seterror(error);
      });
  }, []);
  return (
    <div className="row">
      <div className="col-md-10">
        <h1>Rooms</h1>
        {loading && <Loader />}
        <table className="table table-bordered table-dark">
          <thead className="bs">
            <tr>
              <th>Room Id</th>
              <th>Name</th>
              <th>Type</th>
              <th>Rent Per day</th>
              <th>max count</th>
              <th>phone number</th>
            </tr>
          </thead>
          <tbody>
            {rooms.length &&
              rooms.map((room) => {
                return (
                  <tr>
                    <td>{room._id}</td>
                    <td>{room.name}</td>
                    <td>{room.type}</td>
                    <td>{room.rentperday}</td>
                    <td>{room.maxcount}</td>
                    <td>{room.phonenumber}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

//Add new room through admin panel

export function Addroom(){
    return(
        <div className="row">
            <div className="col-md-5">
        <input type="text"className="form-control"placeholder="room name"/>
        <input type="text"className="form-control"placeholder="rent"/>
        <input type="text"className="form-control"placeholder="max-count"/>
        <input type="text"className="form-control"placeholder="description"/>
        <input type="text"className="form-control"placeholder="phonenumber"/>
            </div>
            <div className="col-md-5">
            <input type="text"className="form-control"placeholder="type"/>
        <input type="text"className="form-control"placeholder="image-url"/>
        <input type="text"className="form-control"placeholder="image-url2"/>
        <input type="text"className="form-control"placeholder="image-url3"/>
        <div className="text-center">
            <button className="btn btn-primary mt-3">Add Room</button>
        </div>

            </div>


        </div>
    )
}
