
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { updateRenderAction } from "../redux/BugReducer";
import { getAllStaffBugsAction } from "../redux/BugReducer";

import { Button } from "@material-ui/core";
import AddComment from "@material-ui/icons/AddComment";
import Comment from "@material-ui/icons/Comment";
import AssignmentInd from "@material-ui/icons/AssignmentInd";


export const StaffBugList = () => {


  const history = useHistory();
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  useEffect(() => {
    dispatch(getAllStaffBugsAction());
  }, []);

  const provideSolution = (item) => {
    console.log("Provide Solution", item);

    // 3 :: updating the store
    dispatch(updateRenderAction(item));

    // navigateing to the page
    history.push("/bug-solution");
  };

  const AssignToOtherStaff = (item) => {
    console.log("Assign to Other Staff ", item);

    // 3 :: updating the store
    dispatch(updateRenderAction(item));

    // navigateing to the page
    history.push("/bug-assign");
  };



  return (
    <div>
     
     <div>
      <center>
      <h3 className="mt-4 mb-3  sticky-top"style={{ fontFamily: "initial" }}>
        LIST OF BUGS
      </h3></center>
      </div>

      <table className="table">
        <thead className="thead-dark sticky-top" style={{ fontFamily: "initial", fontSize: "19px" }}>
          <tr>
            <th scope="col">Bug Id</th>
            <th scope="col">Bug Title</th>
            <th scope="col">Bug Description</th>
            <th scope="col">Critical Level</th>
            <th scope="col">Ticket Id</th>      
            <th scope="col">Raised Date</th>
            <th scope="col">Bug Status</th>
            <th scope="col">Bug Solution</th>
            <th scope="col">Customer Name</th>
            <th scope="col">Project Name</th>
 
            <th scope="col"> <center> Actions </center> </th>

          </tr>
        </thead>
        <tbody className="text-dark">
        <th colSpan="12">
        {state.bug.staffBugList.length===0 && <center>
      <h4 className="mt-4 mb-3  "style={{ fontFamily: "initial" }}>
      <th scope="row">Currently there are no bugs assigned to you</th>
      </h4></center>}</th>
          {state.bug.staffBugList.map((item, index) => (
            <tr key={index}>
              <th scope="row">{item.bugId}</th>
              <td>{item.bugTitle}</td>
              <td>{item.bugDescription}</td>
              <td>{item.criticalLevel}</td>
              <td>{item.ticketId}</td>      
              <td>{item.bugRaisedDate}</td>
              <td>{item.bugStatus}</td>
              <td>{item.bugSolution}</td>
              <td>{item.customer.name}</td>
              <td>{item.project.projectName}</td>
         
              <td>

                 <Button
                     className="mr-3"
                    startIcon={<Comment />}
                      variant="contained"
                      color="primary"
                      title="Add a Solution"
                      style= {
                        {
                        backgroundColor : "darkgreen" 
                        }
                      }
                      size="small"
                    onClick={() => provideSolution(item)}>
                     Solve
                 </Button>

                 <Button
                     className="mr-3"
                    startIcon={<AssignmentInd />}
                      variant="contained"
                      color="primary"
                      title="Assign to Other Staff"
                      size="small"
                    onClick={() => AssignToOtherStaff(item)}>
                     Assign
                 </Button>

              </td>

            
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
