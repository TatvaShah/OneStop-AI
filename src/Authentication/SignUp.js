import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <>
      <div className="login-container">
        {" "}
        <form style={{ marginBottom: 20 }} action="#" class="sign-up-form">
          <h2 class="title">Sign up</h2>
          <div class="input-field">
            <i class="fas fa-user"></i>
            <input type="text" placeholder="Username" />
          </div>
          <div class="input-field">
            <i class="fas fa-envelope"></i>
            <input type="email" placeholder="Email" />
          </div>
          <div class="input-field">
            <i class="fas fa-lock"></i>
            <input type="password" placeholder="Password" />
          </div>
          <input
            style={{ marginTop: 10 }}
            type="submit"
            class="btn"
            value="Sign up"
          />
          <div style={{ marginTop: 20 }}>
            <Link to={"/login"} class="social-text">
              Or Sign IN
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignUp;
