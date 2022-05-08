import React,{useState,useEffect} from "react";
import {Link}from "react-router-dom";
import {Sidebar}from "./Sidebar";
import {Container ,Row,Col}from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./pro.css";

const useQuery=(q)=>{
    const param= new URLSearchParams(window.location.search);
    return param.get(q);
}
export const Healthdata=()=>{

  const [dta,setdta]=useState([]);
  
  useEffect(()=>{
    getdata();
  },[])
 

  
  const getdata=async()=>{
    
    let data=await fetch(`http://localhost:5000/health`);
    let data1=await data.json();
    
    setdta(data1);
  
    
  }
    return(
        <div>
            <Sidebar>
               {/* <Example/>  */}
               <Link to="/"><h3>Herbal Supplements</h3></Link>
               <Link to="/health"><h3>Health Interests</h3></Link>
               <Link to="/bodycare"><h3>Oral Care</h3></Link>
               <Link to="oralcare"><h3>Personal Care</h3></Link>
            </Sidebar>
        <div className="main">
           {dta.map((e)=>(
               <div id="card">
                   <div><img className="firstimage" src={e.Image1}/></div>
                   <Link to={`/health/${e._id}`}><h3>{e.Name}</h3></Link>
               </div>
           ))}
        </div>
        </div>
    )
}