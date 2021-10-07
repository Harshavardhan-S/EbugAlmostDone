import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { authenticateCustomerAction } from "../redux/CustomerLoginReducer";
import background from "../2.jpg";
import icon from"../icon.png";
export const CustomerLogin = () => {
  const formEl = useRef();
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  let history = useHistory();

  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const updateUserName = (e) => setUserName(e.target.value);
  const updatePassword = (e) => setPassword(e.target.value);

  const loginCustomer = (e) => {
    e.preventDefault();

    const isFormValid = formEl.current.checkValidity();
    console.log(isFormValid);

    if (isFormValid) {
      // dispatch the call to redux ::for API CALL
      dispatch(authenticateCustomerAction({ username: username, password }));
    } else {
      e.stopPropagation();
      formEl.current.classList.add("was-validated");
    }
  };

  // REACT ROUTE DOM
  if (state.customerlogin.atheSuccess === true) {
    history.push("/Customer-profile");
    console.log("success");
  }

  return (
    <div
      className="bg-transparent d-flex justify-content-center align-items-center"
      style={{ height: "100vh",
      backgroundImage: `url(${background})`, 
      backgroundSize:"cover",
      backgroundRepeat:"no-repeat"}}
    >
      
      {/* <div className="bg-dark text-warning p-3 d-flex justify-content-end ">
      
              
            
        <Link to="/about-us">
          <h6 className="mr-3">ABOUT US</h6>
        </Link>

        <Link to="/contact-us">
          <h6>CONTACT US</h6>
        </Link>
      </div> */}

      {/* <div className=" justify-content-center align-items-center">
        bg-dark */}
         <div className="w-50">
      <div className="row  justify-content-center ">
            <img align="center" src={icon} height="10%" width="10%" />{" "}
            </div>
  
            <h2 className="text-center mb-4 alert alert-transparent text-dark">CUSTOMER</h2>

            {state.customerlogin.authFailure && (
               <div className="row justify-content-center">
              <h6 className="text-center alert alert-danger">
                Invalid Credentials !
              </h6>
              </div>
            )}

            <form ref={formEl} className="needs-validation" noValidate>
              <div >
              <div className="row mb-1 justify-content-center">
                <input
                  type="text"
                  placeholder="Enter Username"
                  value={username}
                  onChange={updateUserName}
                  minLength="3"
                  maxLength="25"
                  className="form-control form-control-lg mb-1 w-50"
                  required
                />
              </div>
              </div>

              <div>
              <div className="row mb-1 justify-content-center">
                <input
                  type="password"
                  value={password}
                  onChange={updatePassword}
                  placeholder="Enter Password"
                  minLength="6"
                  maxLength="25"
                  className="form-control form-control-lg mb-1 w-50"
                  required
                />
              </div>
              </div>

              <div>
              <div className="row mb-1 justify-content-center">
                <input
                  type="button"
                  value="SIGN IN"
                  onClick={loginCustomer}
                  className="btn btn-success btn-lg w-50"
                />
              </div>
              </div>
              <div className="row mb-1 justify-content-center">
                <Link to="/customer-registration">
                  <input
                    type="button"
                    value="New Customer? Click here to Register"
                    className="text-light btn  btn-lg btn-link w-100"
                  />
                </Link>
                </div>
             

              <div>
               
              </div>
            </form>
          </div>
          
        </div>
     
    
    
  );
};