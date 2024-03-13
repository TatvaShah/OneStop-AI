import React, { useContext, useEffect, useState } from "react";
import "./LoginSignUp.css";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../libs/api";
import { useToasts } from "react-toast-notifications";
import useToken from "../hooks/useToken";
import { MyContext } from "../hooks/MyContextProvider";
const Login = () => {
  const {   setUserDetails } = useToken();
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
    <div className={`login-container`}>
      <div className="forms-container">
        <div className="signin-signup">
          <form
            onSubmit={(e) => {
              handleSubmit(e);
            }}
            style={{ marginBottom: 20 }}
            action="#"
            className="sign-in-form"
          >
            <h2 className="title">Sign in</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input
                type="text"
                name="email"
                value={inputData?.email}
                onChange={(e) => {
                  handleChange(e.target.name, e.target.value);
                }}
                placeholder="Email"
              />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
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
            <input
              style={{ marginTop: 10, textAlign: "center" }}
              type="submit"
              value="Login"
              className="btn btn-secondary "
            />
          </form>
          <Link to={"/signup"}>Or Sign UP</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
