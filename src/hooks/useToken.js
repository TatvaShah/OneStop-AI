import { useState } from "react";

export default function useToken() {
  const getToken = () => {
    const tokenString = localStorage.getItem("token");
    const userToken = JSON.parse(tokenString);
    return userToken?.success;
  };
  const getUserDetails = () => {
    const userString = localStorage.getItem("userDetails");
    const userDetailsData = JSON.parse(userString);
    console.log("userDetailsData: ", userDetailsData);
    return userDetailsData;
  };

  const [token, setToken] = useState(getToken());
  const [userDetails, setUserDetails] = useState(getUserDetails());

  const saveToken = (userToken) => {
    localStorage.setItem("token", JSON.stringify(userToken));
    setToken(userToken.success);
  };
  const saveUserDetails = (userDetails) => {
    console.log("userDetails: ", userDetails);
    localStorage.setItem("userDetails", JSON.stringify(userDetails));
    setUserDetails(userDetails);
  };

  return {
    setToken: saveToken,
    token,
    setUserDetails: saveUserDetails,
    userDetails,
  };
}
