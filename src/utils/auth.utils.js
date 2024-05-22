const parseJwt = (token) => {
    try {
      return JSON.parse(atob(token.split(".")[1]));
    } catch (e) {
      return null;
    }
  };
  
  export function AuthHeader() {
    const loggedInUser = JSON.parse(localStorage.getItem("user"));
    return loggedInUser && loggedInUser.token
      ? { "x-access-token": loggedInUser.token }
      : {};
  }
  
  export const AuthVerify = () => {
    const loggedInUser = JSON.parse(localStorage.getItem("user"));
    if (loggedInUser && loggedInUser.token) {
      const decodedJwt = parseJwt(loggedInUser.token);
      return decodedJwt.exp * 1000 < Date.now() ? false : true;
    } else return false;
  };
  
  export const AuthMembership = () => {
    const loggedInUser = JSON.parse(localStorage.getItem("user"));
    if (loggedInUser?.membership=="active") {
      return true;
    } else return false;
  };
  
  export const GetEmail = () => {
    const loggedInUser = JSON.parse(localStorage.getItem("user"));
    if (loggedInUser.email) {
      return loggedInUser.email;
    } else return null;
  };
  export const GetUserName = () => {
    const loggedInUser = JSON.parse(localStorage.getItem("user"));
    if (loggedInUser?.fullname) {
      return loggedInUser?.fullname;
    } else return null;
  };