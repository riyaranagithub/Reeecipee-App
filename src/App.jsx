import React, { useState } from "react";
import {  Navbar } from "./Context/Context";
import MainContainer from "./components/MainContainer"
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons/faMagnifyingGlass";


function App() {
  const Application_ID="2fc52936";
  const Application_Keys="8c389c8c836ff390ab9ad86c0f096942	";
  const [List,setList]=useState([]);

  const fetchApi=async (foodName)=>{
    const response=await axios.get(`https://api.edamam.com/search?q=${foodName}&app_id=${Application_ID}&app_key=${Application_Keys}`)
    setList(response.data.hits)
    console.log(response)
  }
  const [timeoutID,settimeoutID]=useState("");
  const handleChange=(event)=>{
    clearTimeout(timeoutID)
    const time = setTimeout(()=>fetchApi(event.target.value),500)
    settimeoutID(time)
  }
  return (
    <>
    <Navbar.Provider value={List}>
    <div>
    <div className="w-full flex justify-between items-center pl-10 pr-20 shadow-lg ">
     <div className="w-36 h-32 bg-cover" style={{backgroundImage:'url("./src/logo.png")'}}>
       
     </div>
     
     <div className=" flex items-center text-base justify-center ">
      <a className="mr-20 hover:cursor-pointer text-xl hover:text-2xl font-mono">Home</a>
      <a className="mr-20 hover:cursor-pointer text-xl hover:text-2xl font-mono">About</a>
      <a className="mr-20 hover:cursor-pointer text-xl hover:text-2xl font-mono">Contact</a>
    </div>
     
     <div className="w-80 border-gray-500 p-1 border-2 flex justify-between  rounded-xl">
        <input type="text" placeholder="search" className="p-1 outline-none"  onChange={handleChange}/>
        <span className="hover:cursor-pointer"><FontAwesomeIcon icon={faMagnifyingGlass} /></span>
     </div>
    
    </div>
    </div>
    <MainContainer/>
    </Navbar.Provider>
    </>
  );
}

export default App;
