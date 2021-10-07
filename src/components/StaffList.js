
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { deleteStaffAction, getAllStaffAction, updateRenderAction } from "../redux/StaffReducer";

import { Button } from "@material-ui/core";
import UpdateIcon from "@material-ui/icons/Update";
import DeleteIcon from "@material-ui/icons/Delete";

export const StaffList = () => {

  const clearStaffURef = () => {
    dispatch(updateRenderAction({}));
    history.push("/staff-add");
  };

  const history = useHistory();
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  useEffect(() => {
    dispatch(getAllStaffAction());
  }, []);

  const deleteStaff = (item) => {
    console.log("DELETE STAFF", item.staffId);
    // dispatch the call.
    dispatch(deleteStaffAction(item));
  };

  // 2
  const updateStaff = (item) => {
    console.log("Update Staff", item);

    // 3 :: updating the store
    dispatch(updateRenderAction(item));

    // navigateing to the page
    history.push("/staff-add");
  };

  return (
    <div>
     
      <div className="alert alert-secondary ">
        <h2>Staff List</h2>
      </div>

      <table className="table">
        <thead className="thead-light">
          <tr>
            <th scope="col">Staff Id</th>
            <th scope="col">Name</th>
            <th scope="col">Email Id</th>
            <th scope="col">Designation</th>
            <th scope="col">user Id</th>
            <th scope="col">Password</th>
            <th scope="col">Mobile No</th>
            <th scope="col">Bug Count</th>

            <th scope="col"> <center>Actions </center> </th>
          </tr>
        </thead>
        <tbody className="text-dark">
          {state.staff.staffList.map((item, index) => (
            <tr key={index}>
              <th scope="row">{item.staffId}</th>
              <td>{item.name}</td>
              <td>{item.emailId}</td>
              <td>{item.designation}</td>
              <td>{item.userId}</td>
              <td>{"******"}</td>
              <td>{item.mobileNo}</td>
              <td>{item.bugCount}</td>
             

              <td>
                 <Button
                     className="mr-3"
                    startIcon={<UpdateIcon />}
                      variant="contained"
                      color="primary"
                      title="update staff details"
                      size="small"
                    onClick={() => updateStaff(item)}>
                     Update
                 </Button>

               <Button
                 startIcon={<DeleteIcon />}
                 variant="contained"
                 color="secondary"
                 title="delete a staff"
                 size="small"
                 onClick={() => deleteStaff(item)}>
                 Delete
              </Button>
              
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
