import axios from "axios";

const initState = {
  progress: false,

  // AUTH FAILS => TRUE
  authFailure: false,
  authSuccess: false, // store this information in session/localstorage
};

// ACTION TYPES :: USER :: ENTITY1
const PROGRESS_ACTION_TYPE = "PROGRESS_ACTION_TYPE";
const AUTH_FAILURE_ACTION_TYPE = "AUTH_FAILURE_ACTION_TYPE";
const AUTH_SUCCESS_ACTION_TYPE = "AUTH_SUCCESS_ACTION_TYPE";

export const authenticateAdminAction = (payload) => {
  return async (dispatch) => {
    try {
      // API CALL :: VERIFICATION
      const url = `http://localhost:8080/api/v1/admin/login`;
      const response = await axios.post(url, payload);

      if (response.data !== "") {
        // VALID USER
        // update the UI:: THIS IS TRICKY
        dispatch({ type: AUTH_SUCCESS_ACTION_TYPE, payload: true });

        // Will store the success information in storage.
        // TODO will save into the storage
        localStorage.setItem("authSuccess", "1");
        // NOT DOING THE ACTIVITY OF 5 SECONDS :: page will be redirected to another page.
      } else {
        // INVALID USER :: AUTH FAILS
        // update the UI:: THIS IS TRICKY
        dispatch({ type: AUTH_FAILURE_ACTION_TYPE, payload: true });

        setTimeout(() => {
          dispatch({ type: AUTH_FAILURE_ACTION_TYPE, payload: false });
        }, 3000);
      }
    } catch (err) {
      dispatch({ type: AUTH_FAILURE_ACTION_TYPE, payload: true });

      setTimeout(() => {
        dispatch({ type: AUTH_FAILURE_ACTION_TYPE, payload: false });
      }, 3000);
    }
  };
};

export const adminSignOutAction = () => {
  return async (dispatch) => {
    console.log("signout");
localStorage.setItem("authFail", "1");
    // remove the storage/cookies
    localStorage.removeItem("authSuccess");
    dispatch({ type: AUTH_SUCCESS_ACTION_TYPE, payload: false });
  };
};

// REDURE FOR STATE UPDTE
export function AdminLoginReducer(state = initState, action) {
  switch (action.type) {
    case PROGRESS_ACTION_TYPE:
      return { ...state, progress: action.payload };
    case AUTH_FAILURE_ACTION_TYPE:
      return { ...state, authFailure: action.payload };
    case AUTH_SUCCESS_ACTION_TYPE:
      return { ...state, authSuccess: action.payload };
    default:
      return state;
  }
}
