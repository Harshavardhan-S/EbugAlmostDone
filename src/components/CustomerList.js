import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import {
  getAllCustomerAction,
  updateRenderAction,
} from "../redux/CustomerReducer";

import { customersignOutAction } from "../redux/CustomerLoginReducer";

const customerId = localStorage.getItem("userid");

export const CustomerList = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  useEffect(() => {
    dispatch(getAllCustomerAction());
  }, []);

//   export const EmployeeList = () => {
//     const dispatch = useDispatch();
//     const state = useSelector((state) => state);
  
//     useEffect(() => {
//       dispatch(getAllEmployeeAction());
//     }, []);

  // 2
  const updateRecord = (customerId) => {
    console.log("Update Record", customerId);
    //console.log(item)

    // 3 :: updating the store
    dispatch(updateRenderAction(customerId));

    // navigateing to the page
    history.push("/customer-upsert");
  };

 

  return (
    <div>
      <div>
      
        
        

        <div >
        <div>
      <center>
      <h3 className="mt-4 mb-3  "style={{ fontFamily: "initial" }}>
        LIST OF CUSTOMERS
      </h3></center>
      </div>

          <table className="table" >
            <thead className="thead-dark" style={{ fontFamily: "initial", fontSize: "19px" }}>
              <tr>
                <th scope="col">CustomerID</th>
                <th scope="col">Name</th>
                <th scope="col">Username</th>
                <th scope="col">Password</th>
                <th scope="col">Gender</th>
                <th scope="col"><center>Emailid</center></th>
                <th scope="col">TicketCount</th>
                <th scope="col"><center>Mobile Number</center></th>
              </tr>
            </thead>
            <tbody className="text-dark">
            {state.customer.customerList.length===0 && <center>
      <h4 className="mt-4 mb-3  "style={{ fontFamily: "initial" }}>
      <th scope="row">Currently there are no customers</th>
      </h4></center>}
              {state.customer.customerList.map((item, index) => (
                <tr key={index}>
                  <th scope="row">{item.customerId}</th>
                  <td>{item.name}</td>
                  <td>{item.username}</td>
                  <td>{"*****"}</td>
                  <td>{item.gender}</td>
                  <td>{item.emailid}</td>
                  <td>{item.ticketcount}</td>
                  <td>{item.mobilenumber}</td>
                  

                  <td>
                    {/* <input
                      type="button"
                      value="Update"
                      className="btn btn-outline-secondary btn-sm  mr-1"
                      // onClick={updateRecord} :1
                      onClick={() => updateRecord(item)}
                    /> */}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
    </div>
  );
};