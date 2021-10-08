import { Nav, Navbar } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { adminSignOutAction } from "../redux/AdminLoginReducer";
import { updateRenderAction } from "../redux/ProjectReducer";
import logo from "../bug2.png";
import { Button } from "@material-ui/core";
import ExitToApp from '@material-ui/icons/ExitToApp';

export const AdminNav = () => {

  const dispatch = useDispatch();
  const history = useHistory();

  const admSignOutAction = () => {
    // Logical Operation.
    // cookies / sessino are getting removed from the browser
    dispatch(adminSignOutAction());

    // redirect the user to login page.
    history.push("/");
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="sticky-top">
      {/* <Navbar.Brand href="#home">E-BUG TRACKER</Navbar.Brand> */}
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <img align="left" src={logo} height="5%" width="5%" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto" style={{ fontFamily: "initial", fontSize: "19px" }}>
          <Nav.Link as={Link} to="/staff-add">
            Add Staff 
          </Nav.Link>
          <Nav.Link as={Link} to="/project-upsert">
            Add Project 
          </Nav.Link>
          <Nav.Link as={Link} to="/staff-list">
            Staff List
          </Nav.Link>
          <Nav.Link as={Link} to="/bug-list">
            Bug List
          </Nav.Link>
          <Nav.Link as={Link} to="/project-list">
            Project List
          </Nav.Link>
          <Nav.Link as ={Link} to="/customer-list">
            Customer List
          </Nav.Link>
          <Nav.Link as ={Link} className ="mr-3"to="/bug-report">
            Bug Report
          </Nav.Link>
          <Button
                 startIcon={<ExitToApp />}
                 variant="contained"
                 color="secondary"
                 size="small"
                 onClick={() => admSignOutAction()}>
                 Sign Out
              </Button>
  
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};