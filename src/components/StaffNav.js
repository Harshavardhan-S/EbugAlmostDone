import { Nav, Navbar } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { updateRenderAction } from "../redux/ProjectReducer";
import { staffSignOutAction } from "../redux/StaffProfileReducer";

export const StaffNav = () => {

  const dispatch = useDispatch();
  const history = useHistory();

  const stfSignOutAction = () => {
    // Logical Operation.
    // cookies / sessino are getting removed from the browser
    dispatch(staffSignOutAction());

    // redirect the user to login page.
    history.push("/");
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      {/* <Navbar.Brand href="#home">E-BUG TRACKER</Navbar.Brand> */}
      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/staff-profile">
           Profile
          </Nav.Link>
          <Nav.Link as={Link} to="/staff-bug-list">
            Bug List
          </Nav.Link>
          <Nav.Link onClick={stfSignOutAction} >
            Sign out
          </Nav.Link>
  
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
