import {  Menu, Moon, Plus, Search, Table, UserPen } from "lucide-react";
import React, { useState } from "react";
import Form from "./Form";
import { useDispatch, useSelector } from "react-redux";
import { toggleForm } from "../utils/formSlice";
import { Link } from "react-router-dom";
import Info from "./Info";

const Header = ({setRefresh}) => {
    const dispatch=useDispatch()
    const [pro,setpro]=useState(false);
  const [activeColor, setActiveColor] = useState("table");
  const [intialval,setintival]=useState('Home');

  const isopen=useSelector(store=>store.forms)
  const openForm=()=>{
    dispatch(toggleForm())
  console.log(isopen)

  }
  const changepro=()=>{
    setpro(!pro)
  }
  return (
    <>
    <div className="flex items-center justify-between border-b-1 border-gray-500 pb-2 p-2">
      <h1 className=" bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent font-bold text-2xl">
        LinkStrong
      </h1>
      
      <div className="flex gap-5">
      <div className="flex border border-purple-500 w-72 px-2 py-1 gap-3 rounded-2xl">
        <Search />
        <input
          type="text"
          placeholder="Search Link"
          className="text-center w-full border-none focus:outline-none "
        />
      </div>

      <select
        id="recent"
        name="recent"
        className="border border-gray-400 px-2 py-1 rounded-lg hover:border"
      >
        <option value="recent">Recent</option>
        <option value="popular">Popular</option>
        <option value="option">A-Z</option>
      </select>
      </div>
      <div className="flex gap-4 mr-2 mt-2">
      <div className="flex bg-gray-300 px-1 py-1 rounded-lg">
        <div
          className={`mr-1  p-0.5 ${
            activeColor == "table" ? "bg-black" : "bg-white"
          } cursor-pointer rounded-sm`}
          onClick={() => setActiveColor("menu")}
        >
           {activeColor=='menu'?<Table color="black" />:<Table color="white"/>}
        </div>
        <div
          className={`mr-1  p-0.5 ${
            activeColor == "menu" ? "bg-black " : "bg-white"
          } cursor-pointer rounded-sm`}
          onClick={() => setActiveColor("table")}
        >
            {activeColor=='table'?<Menu color="black" />:<Menu color="white"/>}
        </div>
      </div>
      <div className="p-2 hover:bg-gray-200 rounded-md">
       
        <Moon />
      </div>
      <div onClick={openForm} className="cursor-pointer flex gap-1 items-center bg-gradient-to-r from-purple-500 to-blue-400 text-white px-2 py-2 rounded-lg">
        <Plus/>
        <h1>Add Link</h1>
      </div>
       
            <Link to={'/signin'}>
        <button onClick={()=>setintival('Login')} className="bg-gradient-to-r from-purple-500 to-blue-400 p-2 rounded-2xl">LOGIN</button>
        </Link>
  
    <div className="relative ">
        <UserPen onClick={changepro} />
            {pro&&<Info/>}
    </div>
     
      </div> 
     
    </div>
     {isopen && (
  <div className="fixed inset-0 z-50 flex items-center justify-center  bg-opacity-30 backdrop-blur-sm">
    <Form setRefresh={setRefresh} />
  </div>

)}

    </>
  );
};

export default Header;
