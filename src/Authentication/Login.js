import React from "react";
import "./LoginSignUp.css";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div class={`login-container`}>
      <div class="forms-container">
        <div class="signin-signup">
          <form style={{ marginBottom: 20 }} action="#" class="sign-in-form">
            <h2 class="title">Sign in</h2>
            <div class="input-field">
              <i class="fas fa-user"></i>
              <input type="text" placeholder="Username" />
            </div>
            <div class="input-field">
              <i class="fas fa-lock"></i>
              <input type="password" placeholder="Password" />
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
