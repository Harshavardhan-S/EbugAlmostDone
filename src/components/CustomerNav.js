import { Nav, Navbar } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { customerSignOutAction } from "../redux/CustomerLoginReducer";

import { updateRenderAction } from "../redux/ProjectReducer";

export const CustomerNav = () => {

  const dispatch = useDispatch();
  const history = useHistory();

  const cstSignOutAction = () => {
    // Logical Operation.
    // cookies / sessino are getting removed from the browser
    dispatch(customerSignOutAction());

    // redirect the user to login page.
    history.push("/");
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      {/* <Navbar.Brand href="#home">E-BUG TRACKER</Navbar.Brand> */}
      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/bug-add">
            Add Bug 
          </Nav.Link>
          <Nav.Link as={Link} to="/customer-bug-list">
            Bug List
          </Nav.Link>
          <Nav.Link as={Link} to="/customer-profile">
            Profile
          </Nav.Link>
          <Nav.Link onClick={cstSignOutAction} >
            Sign out
          </Nav.Link>
  
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
