import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { getAllCustomerBugsAction } from "../redux/BugReducer";
import { Link } from "react-router-dom";

export const CustomerBugList = () => {


  const history = useHistory();
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  useEffect(() => {
    dispatch(getAllCustomerBugsAction());
  }, []);




  return (
    <div>
     
     <div>
      <center>
      <h3 className="mt-4 mb-3 sticky-top "style={{ fontFamily: "initial" }}>
        LIST OF BUGS
      </h3></center>
      </div>

      <table className="table">
        <thead className="thead-dark sticky-top"style={{ fontFamily: "initial", fontSize: "19px" }}>
          <tr>
            <th scope="col">Bug Id</th>
            <th scope="col">Bug Title</th>
            <th scope="col">Bug Description</th>
            <th scope="col">Critical Level</th>
            <th scope="col">Ticket Id</th>      
            <th scope="col">Raised Date</th>
            <th scope="col">Bug Status</th>
            <th scope="col">Bug Solution</th>
            <th scope="col">Project Name</th>
            <th scope="col">Staff Name</th>

            
          </tr>
        </thead>
        <tbody className="text-dark ">
          <th colSpan="10">
        {state.bug.customerBugList.length===0 && <center>
      <h4 className="mt-4 mb-3  "style={{ fontFamily: "initial" }}>
      <th scope="row">Currently you have not raised any bugs, to raise a Bug <Link to ="/bug-add"><input type="button" className="text-primary btn btn-lg btn-link " value = "Click here"/> </Link></th>
      </h4></center>}</th>
          {state.bug.customerBugList.map((item, index) => (
            <tr key={index}>
              <th scope="row">{item.bugId}</th>
              <td>{item.bugTitle}</td>
              <td>{item.bugDescription}</td>
              <td>{item.criticalLevel}</td>
              <td>{item.ticketId}</td>        
              <td>{item.bugRaisedDate}</td>
              <td>{item.bugStatus}</td>
              <td>{item.bugSolution}</td>
              <td>{item.project.projectName}</td>
              <td> {item.staff.name} </td> 
           
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
