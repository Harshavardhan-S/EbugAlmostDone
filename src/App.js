import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
import { StaffAdd } from "./components/StaffAdd";
import { useSelector } from "react-redux";
import { StaffList } from "./components/StaffList";
import { StaffProfileUpdate } from "./components/StaffProfileUpdate";
import { StaffProfile } from "./components/StaffProfile";
import { StaffLogin } from "./components/StaffLogin";
import { BugList } from "./components/BugList";
import { BugRaise } from "./components/BugRaise";
import { StaffBugList } from "./components/StaffBugList";
import { CustomerBugList } from "./components/CustomerBugList";
import { BugReport } from "./components/BugReport";
import { BugSolution } from "./components/BugSolution";
import { BugAssign } from "./components/BugAssign";
import { AdminWelcome } from "./components/AdminWelcome";
import { CustomerLogin } from "./components/CustomerLogin";
import { CustomerList } from "./components/CustomerList";

import { CustomerRegistration } from "./components/CustomerRegistration"
import { CustomerProfile } from "./components/CustomerProfile";
import { CustomerProfileUpdate } from "./components/CustomerUpdate";
import { ProjectList } from "./components/ProjectList";
import { ProjectUpsert } from "./components/ProjectUpsert";
import { AdminLogin } from "./components/AdminLogin";
import StartPage from "./components/StartPage";
import NavigateLogin from "./components/NavigateLogin";
import { AdminNav } from "./components/AdminNav";
import { StaffNav } from "./components/StaffNav";
import { CustomerNav } from "./components/CustomerNav";

function App() {
  const history = useHistory();
  const state = useSelector((state) => state);
  
   const authSuccessFromStorage = localStorage.getItem("authSuccess");  
  const athSuccessFromStorage = localStorage.getItem("athSuccess");  
  const atheSuccessFromStorage = localStorage.getItem("atheSuccess");

  // const auth = localStorage.getItem("authFail");
  // const ath = localStorage.getItem("athFail");
  // const athe = localStorage.getItem("atheFail");

  //   if (authSuccessFromStorage !== "1" && athSuccessFromStorage !== "1" && atheSuccessFromStorage !== "1") {

  //       if (auth === "1") {
  //         history.push("/");
  //       } else if(ath === "1") {
  //         history.push("/");
  //       }
  //       else if(athe === "1") {
  //          history.push("/");

  //        }

  //     }
  
  
  

  return (
    <>
      
      {authSuccessFromStorage === "1" && <AdminNav/> } 

      {athSuccessFromStorage === "1" && <StaffNav/> } 

      {atheSuccessFromStorage === "1" && <CustomerNav/> } 

      <Route exact path="/" component={StartPage} />
      <Route exact path="/login" component={NavigateLogin} />
      <Route exact path="/staff-add" component={StaffAdd} />
      <Route exact path="/staff-list" component={StaffList} />
      <Route exact path="/staff-profile-update" component={StaffProfileUpdate} />
      <Route exact path="/staff-profile" component={StaffProfile} />
      <Route exact path="/staff-login" component={StaffLogin} />
      <Route exact path="/bug-list" component={BugList} />
      <Route exact path="/bug-add" component={BugRaise} />
      <Route exact path="/staff-bug-list" component={StaffBugList} />
      <Route exact path="/customer-bug-list" component={CustomerBugList} />
      <Route exact path="/bug-report" component={BugReport} />
      <Route exact path="/bug-solution" component={BugSolution} />
      <Route exact path="/bug-assign" component={BugAssign} />
      <Route exact path="/admin-welcome" component={AdminWelcome} />
      <Route exact path="/customer-registration" component={CustomerRegistration} />
      <Route exact path="/customer-login" component={CustomerLogin} />
      <Route exact path="/customer-list" component={CustomerList} />
      
      <Route exact path="/customer-profile" component={CustomerProfile} />
      <Route exact path="/customer-update" component={CustomerProfileUpdate} />
      <Route exact path="/project-list" component={ProjectList} />
      <Route exact path="/project-upsert" component={ProjectUpsert} />

      <Route exact path="/admin-login" component={AdminLogin} />
      
      
      </>
  );
}

export default App;
