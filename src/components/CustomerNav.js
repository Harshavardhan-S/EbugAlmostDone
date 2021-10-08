import { Nav, Navbar } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { customerSignOutAction } from "../redux/CustomerLoginReducer";

import { updateRenderAction } from "../redux/ProjectReducer";
import { Button } from "@material-ui/core";
import ExitToApp from '@material-ui/icons/ExitToApp';
import logo from "../bug2.png";

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
    <Navbar bg="dark" variant="dark" expand="lg" className="sticky-top">
      {/* <Navbar.Brand href="#home">E-BUG TRACKER</Navbar.Brand> */}
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <img align="left" src={logo} height="5%" width="5%" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto"style={{ fontFamily: "initial", fontSize: "19px" }}>
          <Nav.Link as={Link} to="/bug-add">
            Add Bug 
          </Nav.Link>
          <Nav.Link as={Link} to="/customer-bug-list">
            Bug List
          </Nav.Link>
          <Nav.Link as={Link} className="mr-3" to="/customer-profile">
            Profile
          </Nav.Link>
          <Button
                 startIcon={<ExitToApp />}
                 variant="contained"
                 color="secondary"
                 size="small"
                 onClick={() => cstSignOutAction()}>
                 Sign Out
              </Button>
  
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
