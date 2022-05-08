import React,{useState,useEffect} from "react";
import {Link}from "react-router-dom";

import {Container ,Row,Col}from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./pro.css";

const useQuery=(q)=>{
    const param= new URLSearchParams(window.location.search);
    return param.get(q);
}
export const Productdata=()=>{

  const [dta,setdta]=useState([]);
  
  useEffect(()=>{
    getdata();
  },[])
 

  
  const getdata=async()=>{
    
    let data=await fetch(`http://localhost:5000/products`);
    let data1=await data.json();
    
    setdta(data1);
  
    
  }
    return(
        <div className="main">
           {dta.map((e)=>(
               <div id="card">
                   <div><img className="firstimage" src={e.Image1}/></div>
                   <Link to={`/products/${e._id}`}><h3>{e.Name}</h3></Link>
               </div>
           ))}
        </div>
    )
}