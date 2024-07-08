import { LOGIN_SESSION, LOGOUT_USER } from "../action-types/userActionTypes";

export const loginSession = (session) => {
  return {
    type: LOGIN_SESSION,
    payload: session,
  };
};
export const logoutUser = (session) => {
  return {
    type: LOGOUT_USER,
    payload: session,
  };
};
