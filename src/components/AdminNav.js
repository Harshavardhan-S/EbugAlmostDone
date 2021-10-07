import { Nav, Navbar } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { adminSignOutAction } from "../redux/AdminLoginReducer";
import { updateRenderAction } from "../redux/ProjectReducer";

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
    <Navbar bg="dark" variant="dark" expand="lg">
      {/* <Navbar.Brand href="#home">E-BUG TRACKER</Navbar.Brand> */}
      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
        <Nav.Link as={Link} to="/admin-welcome">
            Home
          </Nav.Link>
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
          <Nav.Link as={Link} to="/customer-list">
            Customer List
          </Nav.Link>
          <Nav.Link onClick={admSignOutAction} >
            Sign out
          </Nav.Link>
  
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};