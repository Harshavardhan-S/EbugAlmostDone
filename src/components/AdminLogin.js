import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { authenticateAdminAction } from "../redux/AdminLoginReducer";
import background from "../2.jpg";
import icon from"../icon.png";
export const AdminLogin = () => {
  const formEl = useRef();
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  let history = useHistory();

  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const updateUserName = (e) => setUserName(e.target.value);
  const updatePassword = (e) => setPassword(e.target.value);

  const loginAdmin = (e) => {
    e.preventDefault();

    const isFormValid = formEl.current.checkValidity();
    console.log(isFormValid);

    if (isFormValid) {
      // dispatch the call to redux ::for API CALL
      dispatch(authenticateAdminAction({ username: username, password }));
    } else {
      e.stopPropagation();
      formEl.current.classList.add("was-validated");
    }
  };

  // REACT ROUTE DOM
  if (state.adminlogin.authSuccess === true) {
    history.push("/staff-list");
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
     

<div className="w-50">
      <div className="row  justify-content-center ">
            <img align="center" src={icon} height="10%" width="10%" />{" "}
            </div>
        <h2 className="text-center mb-4 alert alert-transparent text-dark">ADMIN</h2>

            {state.adminlogin.authFailure && (
              <center>
              <h6 className="text-center alert alert-danger w-50">
                Invalid Credentials !
              </h6>
              </center>
            )}

            <form ref={formEl} className="needs-validation" noValidate>
              <div>
              <div className="row mb-1 justify-content-center">
                <input
                  type="text"
                  placeholder="Enter Username"
                  value={username}
                   onChange={updateUserName}
                  minLength="3"
                  maxLength="25"
                  className="form-control form-control-lg w-50"
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
                  minLength="4"
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
                  value="LOGIN"
                  onClick={loginAdmin}
                  className="btn btn-success btn-lg w-50"
                />
              </div>
              </div>
              <div>
               
              </div>
            </form>
          </div>
        </div>
      
    
  );
};
