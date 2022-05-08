import React,{useState,useEffect} from "react";
import{Link}from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import {Example}from "./Dropdown";
import {Container ,Row,Col}from "react-bootstrap";
import {Sidebar}from "./Sidebar";
import {Productdata}from "./Productdata";
const useQuery=(q)=>{
    const param= new URLSearchParams(window.location.search);
    return param.get(q);
}
export const Product=()=>{


    return(
        <Container>
            <Sidebar>
               {/* <Example/>  */}
               <Link to="/product"><h3>Herbal Supplements</h3></Link>
               <Link to="/health"><h3>Health Interests</h3></Link>
               <Link to="/bodycare"><h3>Oral Care</h3></Link>
               <Link to="oralcare"><h3>Personal Care</h3></Link>
            </Sidebar>
            <Productdata />
        </Container>
    )
}