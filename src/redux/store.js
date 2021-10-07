import {
    applyMiddleware,
    combineReducers,
    createStore,
  } from "@reduxjs/toolkit";
  import thunk from "redux-thunk";
import { BugAssignReducer } from "./BugAssignReducer";
import { BugReducer } from "./BugReducer";
import { StaffProfileReducer } from "./StaffProfileReducer";
import { StaffReducer} from "./StaffReducer";
import { CustomerReducer } from "./CustomerReducer";
import { CustomerProfileReducer } from "./CustomerProfileReducer";
import { CustomerLoginReducer} from "./CustomerLoginReducer";
import { ProjectReducer } from "./ProjectReducer";
import { AdminLoginReducer } from "./AdminLoginReducer";


  const rootReducer = combineReducers({

    staff: StaffReducer,
    staffProfile:StaffProfileReducer,
    bug : BugReducer,
    bugAssign : BugAssignReducer,
    customerlogin: CustomerLoginReducer,
    customer: CustomerReducer,
    cstProfile: CustomerProfileReducer,
    project: ProjectReducer,
    adminlogin: AdminLoginReducer,
  });
  
  const store = createStore(rootReducer, applyMiddleware(thunk));
  export { store };
  
  // HOW TO ACCESS THE STORE IN COMPOENNT
  // state.user.authSuccess
  