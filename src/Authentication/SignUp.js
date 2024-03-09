import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser, registerVerifyOtp } from "../libs/api";
import { useToasts } from "react-toast-notifications";
import OtpInput from "react-otp-input";

const SignUp = () => {
  const { addToast } = useToasts();
  const navigate = useNavigate();
  const [inputData, setInputData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [code, setCode] = useState("");
  const [step, setStep] = useState("step1");

  const handleChange = (name, value) => {
    setInputData({ ...inputData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const registerData = await registerUser(inputData);

    console.log("registerData: ", registerData);
    if (registerData.status) {
      setStep("step2");
      console.log("registerData: ", registerData);
      addToast("Otp Send Successfully!", {
        appearance: "success",
        autoDismiss: true,
      });
    } else {
      addToast(registerData.message, {
        appearance: "error",
        autoDismiss: true,
      });
    }
  };
  const handleChangeOtpInput = (code) => setCode(code);
  const handleVerifyOTPRequest = async () => {
    if (code?.length < 6) {
      addToast("Please Enter a valid OTP ", {
        appearance: "error",
        autoDismiss: true,
      });
    } else {
      const formData = {
        email: inputData?.email,
        otp: code,
      };

      const registerData = await registerVerifyOtp(formData);

      console.log("registerData: ", registerData);
      if (registerData.status) {
        navigate("/login");
        // console.log("registerData: ", registerData);
        // addToast(registerData.message, {
        //   appearance: "success",
        //   autoDismiss: true,
        // });
      } else {
        addToast(registerData.message, {
          appearance: "error",
          autoDismiss: true,
        });
      }
    }
  };
  return (
    <>
      <div className="login-container">
        {" "}
        {step === "step1" && (
          <form
            onSubmit={(e) => {
              handleSubmit(e);
            }}
            style={{ marginBottom: 20 }}
            action="#"
            class="sign-up-form"
          >
            <h2 class="title">Sign up</h2>
            <div class="input-field">
              <i class="fas fa-user"></i>
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
            <div class="input-field">
              <i class="fas fa-envelope"></i>
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
            <div class="input-field">
              <i class="fas fa-lock"></i>
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
              class="btn"
              value="Sign up"
            />
            <div style={{ marginTop: 20 }}>
              <Link to={"/login"} class="social-text">
                Or Sign IN
              </Link>
            </div>
          </form>
        )}
        {step === "step2" && (
          <div className="justify-content-center">
            <div>
              <div className="mt-4">
                <div
                  style={{ border: "1px solid #9c5945", borderRadius: "14px" }}
                  className=""
                >
                  <div className="modal-body otp-modal-body ">
                    <h5 style={{ fontSize: 16 }} className="text-capitalize">
                      This is system generated one time password :
                    </h5>
                    {/* <input className="mt-3" type="text" /> */}
                    <div className="mt-4 otpInputFieldDiv">
                      <OtpInput
                        value={code}
                        onChange={handleChangeOtpInput}
                        numInputs={6}
                        separator={<span style={{ width: "8px" }}></span>}
                        isInputNum={true}
                        shouldAutoFocus={true}
                        inputStyle={{
                          border: "1px solid transparent",
                          borderRadius: "8px",
                          width: "54px",
                          height: "54px",
                          fontSize: "20px",
                          color: "#000",
                          fontWeight: "400",
                          caretColor: "blue",
                          backgroundColor: "#7080901f",
                        }}
                        focusStyle={{
                          border: "1px solid #CFD3DB",
                          outline: "none",
                        }}
                      />
                    </div>

                    <button
                      className="btn btn-secondary mt-4"
                      data-dismiss="modal"
                      aria-label="Close"
                      style={{
                        fontWeight: 700,
                        backgroundColor: "rgb(156 89 69)",
                        borderColor: "rgb(156 89 69)",
                      }}
                      onClick={() => handleVerifyOTPRequest()}
                    >
                      Verify
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default SignUp;
