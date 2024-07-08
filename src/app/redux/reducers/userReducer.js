import { LOGIN_SESSION, LOGOUT_USER } from "../action-types/userActionTypes";
import cookies from 'js-cookie';

  const initialState = {
    session : cookies.get('token')? true : false,
    
   
  };
  export const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case LOGIN_SESSION :
        return {
          ...state,
          session : action.payload
        }
        case LOGOUT_USER : {
          console.log("Logout reducer", action.payload)
            cookies.remove('token');
            return{
              ...state,
              session : action.payload
            }
          }
      default:
        return state;
    }
  };