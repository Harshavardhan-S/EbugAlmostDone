import { Nav, Navbar } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { updateRenderAction } from "../redux/ProjectReducer";
import { staffSignOutAction } from "../redux/StaffProfileReducer";
import { Button } from "@material-ui/core";
import ExitToApp from '@material-ui/icons/ExitToApp';
import logo from "../bug2.png";
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
    <Navbar bg="dark" variant="dark" expand="lg" className="sticky-top">
      {/* <Navbar.Brand href="#home">E-BUG TRACKER</Navbar.Brand> */}
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <img align="left" src={logo} height="5%" width="5%" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto" style={{ fontFamily: "initial", fontSize: "19px" }}>
          <Nav.Link as={Link} to="/staff-profile">
           Profile
          </Nav.Link>
          <Nav.Link as={Link} className="mr-3" to="/staff-bug-list">
            Bug List
          </Nav.Link>
           <Button
                 startIcon={<ExitToApp />}
                 variant="contained"
                 color="secondary"
                 size="small"
                 onClick={() => stfSignOutAction()}>
                 Sign Out
              </Button>
  
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
