import React, { useContext, useEffect, useState } from "react";
import "../Styles/LoginSignUp.css";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../libs/api";
import { useToasts } from "react-toast-notifications";
import useToken from "../hooks/useToken";
import { MyContext } from "../hooks/MyContextProvider";
import Logo from "../Images/OSI-GRADIENT-LOGO.png";

const Login = () => {
  const { setUserDetails } = useToken();
  const { token, updateToken } = useContext(MyContext);

  const { addToast } = useToasts();
  const navigate = useNavigate();
  const [inputData, setInputData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (name, value) => {
    setInputData({ ...inputData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = await loginUser(inputData);
    if (userData.status) {
      updateToken(userData?.data?.token);
      setUserDetails({
        id: userData?.data?.userDetail?._id,
        firstName: userData?.data?.userDetail?.name,

        userName: userData?.data?.userDetail?.eamil,
        email: userData?.data?.userDetail?.email,
        token: userData?.data?.token,
      });
      navigate("/");
      // setUserData(userData?.data?.token);
      addToast("Login Successfully!", {
        appearance: "success",
        autoDismiss: true,
      });
    } else {
      addToast(userData.message, {
        appearance: "error",
        autoDismiss: true,
      });
    }
  };

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [navigate, token]);

  return (
    <div class="container-fluid">
      <div class="row no-gutter">
        <div class="col-md-4 " style={{ backgroundColor: "#1D1C21" }}>
          <div
            className="main-login-div d-flex justify-content-center align-items-center flex-column"
            style={{ padding: 30 }}
          >
            <img className="login-logo" src={Logo} alt="logo" />

            <p className="login-text">LOG IN</p>
            <p className="login-text-sm">
              Don’t have an account? <Link to={"/signup"}>Sign up</Link>
            </p>

            <div className="login-form mt-4">
              <p className="mb-0 pb-1">Email/Username</p>
              <input
                type="text"
                name="email"
                value={inputData?.email}
                onChange={(e) => {
                  handleChange(e.target.name, e.target.value);
                }}
                placeholder="Email"
              />
              <p className="mb-0 pb-1 mt-3">Password</p>
              <input
                type="password"
                name="password"
                value={inputData?.password}
                onChange={(e) => {
                  handleChange(e.target.name, e.target.value);
                }}
                placeholder="Password"
              />
            </div>

            <button
              className="login-button"
              onClick={(e) => {
                handleSubmit(e);
              }}
            >
              LOG IN
            </button>

            <Link to={"/forgetpassword"} className="mt-2">
              forgot your password?
            </Link>
          </div>
        </div>
        <div class="col-md-8 d-none d-md-flex bg-image"></div>
      </div>
    </div>
  );
};

export default Login;
