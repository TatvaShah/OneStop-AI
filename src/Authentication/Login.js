import React, { useState } from "react";
import "./LoginSignUp.css";
import { Link } from "react-router-dom";
import { loginUser } from "../libs/api";
import { useToasts } from "react-toast-notifications";
const Login = () => {
  const { addToast } = useToasts();
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
      console.log("userData: ", userData);
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

  return (
    <div class={`login-container`}>
      <div class="forms-container">
        <div class="signin-signup">
          <form
            onSubmit={(e) => {
              handleSubmit(e);
            }}
            style={{ marginBottom: 20 }}
            action="#"
            class="sign-in-form"
          >
            <h2 class="title">Sign in</h2>
            <div class="input-field">
              <i class="fas fa-user"></i>
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
            <div class="input-field">
              <i class="fas fa-lock"></i>
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
              class="btn solid"
            />
          </form>
          <Link to={"/signup"}>Or Sign UP</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
