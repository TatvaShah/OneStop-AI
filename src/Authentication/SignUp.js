import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../libs/api";
import { useToasts } from "react-toast-notifications";
import { MyContext } from "../hooks/MyContextProvider";

const SignUp = () => {
  const { addToast } = useToasts();
  const { token } = useContext(MyContext);
  const navigate = useNavigate();
  const [inputData, setInputData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (name, value) => {
    setInputData({ ...inputData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const registerData = await registerUser(inputData);

    if (registerData.status) {
      // setStep("step2");
      navigate("/login");
      addToast(
        "Email id Send Successfully! You can Verify Your Account through Email.",
        {
          appearance: "success",
          autoDismiss: true,
        }
      );
    } else {
      addToast(registerData.message, {
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
    <>
      <div className="login-container">
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
          style={{ marginBottom: 20 }}
          action="#"
          className="sign-up-form"
        >
          <h2 className="title">Sign up</h2>
          <div className="input-field">
            <i className="fas fa-user"></i>
            <input
              value={inputData?.name}
              name="name"
              onChange={(e) => {
                handleChange(e.target.name, e.target.value);
              }}
              type="text"
              placeholder="Full Name"
            />
          </div>
          <div className="input-field">
            <i className="fas fa-envelope"></i>
            <input
              value={inputData?.email}
              name="email"
              onChange={(e) => {
                handleChange(e.target.name, e.target.value);
              }}
              type="email"
              placeholder="Email"
            />
          </div>
          <div className="input-field">
            <i className="fas fa-lock"></i>
            <input
              value={inputData?.password}
              name="password"
              onChange={(e) => {
                handleChange(e.target.name, e.target.value);
              }}
              type="password"
              placeholder="Password"
            />
          </div>
          <input
            style={{ marginTop: 10 }}
            type="submit"
            className="btn btn-secondary mt-4"
            value="Sign up"
          />
          <div style={{ marginTop: 20 }}>
            <Link to={"/login"} className="social-text">
              Or Sign IN
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignUp;
