import { loginSession } from "@/app/redux/actions/userAction";
import axios from "axios";
const API_URL = process.env.NEXT_PUBLIC_ENV_VARIABLE;

export const userRegister = async (credentials) => {
  const config = {
    headers: {
      "Accept ": "application/json",
      "Content-Type": "application/json",
      withCredentials: "true",
    },
  };
  try {
    const response = await axios.post(
      `${API_URL}/auth/signupWithCredentials`,
      credentials,
      config
    );
    return Promise.resolve(response.data);
  } catch (error) {
    console.error("Sign up error:", error);
    return Promise.reject(error.response ? error.response.data : error);
  }
};
export const userLogin = (credentials) => {
  return async (dispatch) => {

    const config = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        withCredentials: true,
      },
    };
    try {
      const newURL = `${API_URL}/auth/signinWithGoogle`
      console.log("signinWithGoogle : ", newURL);
      const response = await axios.post(
        `${API_URL}/auth/signinWithCredentials`,
        credentials,
        config
      );
      if (response.data.success) {
        dispatch(loginSession(response.data.success));
        return Promise.resolve(response.data);
      }
    } catch (error) {
      console.error("Sign up error:", error);
      return Promise.reject(error.response ? error.response.data : error);
    }
  };
};
export const signupWithGoogle = async (credentials) => {
  const config = {
    headers: {
      "Accept ": "application/json",
      "Content-Type": "application/json",
      withCredentials: "true",
    },
  };
  try {
    const response = await axios.post(
      `${API_URL}/auth/signupWithGoogle`,
      credentials,
      config
    );
    return Promise.resolve(response.data);
  } catch (error) {
    console.error("Sign up error:", error);
    return Promise.reject(error.response ? error.response.data : error);
  }
};

// http://localhost:4000/api/v1/auth/signinWithCredentials
export const loginWithGoogle =  (credentials) => {
  // Corrected parameter name to 'credentials'
  return async (dispatch) => {


    const config = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };
    try {
     
      const response = await axios.post(
        `${API_URL}/auth/signinWithGoogle`,
        credentials,
        config
      );
      if (response.data.success) {
        console.log("Services : ", response);
        dispatch(loginSession(response.data.success));
        return Promise.resolve(response.data);
      }
    } catch (error) {
      console.error("Sign in error:", error);
      throw error.response ? error.response.data : error;
    }
  };
};

// recover the account by sending the user email
// export const sendMail = async (credentials) => {
//   try {
//     const { data } = await axiosInstance.post("/generateOTP", credentials);
//     return Promise.resolve({ data });
//   } catch (error) {
//     return Promise.reject({ error: "Credentials not correct...!" });
//   }
// };
// // verify otp
// export const verifyOTP = async (code) => {
//   try {
//     const { data } = await axiosInstance.post("/verifyOTP", code);

//     return Promise.resolve({ data });
//   } catch (error) {
//     return Promise.reject({ error: "OTP not correct...!" });
//   }
// };
// export const resetPassword = async (credentials) => {
//   const config = {
//     headers: {
//       "Content-Type": "application/json",
//     },
//   };
//   try {
//     console.log("Credentials : ", credentials);
//     const { data } = await axiosInstance.post(
//       "/resetPassword",
//       credentials,
//       config
//     );
//     return Promise.resolve({ data });
//   } catch (error) {
//     return Promise.reject({ error: "OTP not correct...!" });
//   }
// };
