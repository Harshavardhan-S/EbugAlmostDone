import { useEffect, useRef } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";


import { updateCustomerDetailsAction } from "../redux/CustomerProfileReducer";
import { getCustomerDetailsAction } from "../redux/CustomerProfileReducer";
import { customersignOutAction } from "../redux/CustomerLoginReducer";
 // import backcolor from "../image18.jfif";

  export const CustomerProfileUpdate = () => {

  
  const dispatch = useDispatch();
  const history = useHistory();
  const state = useSelector((state) => state);
  
  console.log(state);
  
  const formEl = useRef();

//   useEffect(() => {
//     dispatch(getCustomerDetailsAction(customerId));
//   }, []);
  

  const [name, setName] = useState(state.cstProfile.CustomerProfile.name);
  const [username, setUserName] = useState(state.cstProfile.CustomerProfile.username);
  const [password, setPassword] = useState(state.cstProfile.CustomerProfile.password);
  const [emailid, setEmailid] = useState(state.cstProfile.CustomerProfile.emailid);
  const [gender, setGender] = useState(state.cstProfile.CustomerProfile.gender);
  const [mobilenumber, setMobileNumber] = useState(
    state.cstProfile.CustomerProfile.mobilenumber
  );
  const customerId = localStorage.getItem("customerId");
  
  
  const updateName = (e) => setName(e.target.value);
  const updateUserName = (e) => setUserName(e.target.value);
  const updatePassword = (e) => setPassword(e.target.value);
  const updateEmailid = (e) => setEmailid(e.target.value);
  const updateGender = (e) => setGender(e.target.value);
  const updateMobileNumber = (e) => {
    console.log(e.target.value);

    // replacing all the non-digit ^\d with empty string.
    const numericValue = e.target.value.replace(/[^\d]/gi, "");
    setMobileNumber(numericValue);
  };

  const updateCustomerProfile = (e) => {
    e.preventDefault();

    const isFormValid = formEl.current.checkValidity();
    if (isFormValid) {
      dispatch(
        updateCustomerDetailsAction({
            customerId: state.cstProfile.CustomerProfile.customerId,
            name,
          username,
          password,
          emailid,
           gender,
          mobilenumber
          
        })
      );

      
      setTimeout(() => 
      { history.push("/customer-profile")}, 4000 ); 
      
    } else {
      e.stopPropagation();
      formEl.current.classList.add("was-validated");
    }
  };

  

return (
   
  <div className="pupdate" style={{ height: "750px" }}>
        
<div className="d-flex alert alert-secondary">  
         <span className="col-5 p-1">  
             <a href="/customer-profile">
                 <h5> Back </h5> 
            </a>
         </span> 
           
         <center> 
              <h2>Update Profile</h2> 
        </center> 
      </div>  

        <div>
           {state.cstProfile.progress && (
        <div className="row mb-1  justify-content-center">
          <div className="mx-4 alert alert-success w-50">
            Profile updated Successfully
          </div>
        </div> 
         )}
        </div>

    <form ref={formEl} className="mx-4 needs-validation" noValidate>
        
       
        <div className="row text-light col-7 justify-content-center">
       <h5> Name</h5>
       </div>
        <div className="row mb-2 justify-content-center">         
        <input
          type="text"
          className="form-control w-50"
          value={name}
          placeholder="Enter name"
          onChange={updateName}
          minLength="3"
          maxLength="30"
          required
          />
        </div>

        <div className="row text-light col-7 justify-content-center">
       <h5>Email Id</h5>
       </div>
        <div className="row mb-2 justify-content-center">
        <input
          type="email"
          className="form-control w-50"
          value={emailid}
          placeholder="Enter emailId"
          onChange={updateEmailid}
          required
          
        />
        </div>

        <div className="row text-light col-7 justify-content-center">
       <h5>UserName</h5>
       </div>

        <div className="row mb-2 justify-content-center">
          <input
            type="text"
            className="form-control w-50"
            value={username}
            placeholder="Enter UserName"
            onChange={updateUserName}
            required
            
          />
        </div>

        <div className="row text-light col-7 justify-content-center">
       <h5>Password</h5>
       </div>
        <div className="row mb-2 justify-content-center">
        <input
          type="text"
          className="form-control w-50"
          value={password}
          placeholder="Enter password"
          onChange={updatePassword}
          minLength="8"
          maxLength="15"
          required
        />
        </div>

        <div className="row text-light col-8 justify-content-center">
       <h5>Mobile Number</h5>
       </div>
        <div className="row mb-2 justify-content-center">
        <input
          type="text"
          className="form-control w-50"
          value={mobilenumber}
          placeholder="Enter Mobile Number"
          onChange={updateMobileNumber}
          minLength="10"
          maxLength="10"
          required
        />
        </div>


      <div className="row mb-1 justify-content-center">
             <input
                type="button"
                onClick={updateCustomerProfile}
                value="Save Changes"
                className="btn btn-lg mb-2 btn-success w-50"
              />    
       </div>
    
     </form>
  </div>
 )
}