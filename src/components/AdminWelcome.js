import React from "react";
import logo from "../bug1.png";
import background from "../11.png";
import { useDispatch } from "react-redux";
import { Nav, Navbar } from "react-bootstrap";
import { adminsignOutAction } from "../redux/AdminLoginReducer";
import { Link, useHistory } from "react-router-dom";
function AdminWelcome() {
 
  

    
 
    
    return (
       
          
      <div
        style={{
          height: "100vh",
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        
         
       
          
     
      </div> 
    );
  }
  
  export { AdminWelcome};