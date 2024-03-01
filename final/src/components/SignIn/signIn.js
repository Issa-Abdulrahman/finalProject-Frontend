import React, { useState } from "react";
import Styles from "./signIn.module.css"
import { Button, TextField } from "@mui/material";
import { FcGoogle } from "react-icons/fc";
import hide from "../../assets/Icons/hide.png"
import eye from "../../assets/Icons/eye.png"
import signin from "../../assets/Images/signin.png";

function Signin() {

  const [showPassword, setShowPassword] = useState(false);
  const visiblePassword = () => {
    setShowPassword(!showPassword);
  }

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    })
  };
  return (
    <>
      <div className={Styles.signin}>
        <h1 className={Styles.welcome}>Welcome Back!</h1>


        <form className={Styles.form}>

          <Button
            // fullWidth
            className={Styles.button}
            // onClick={handleGoogle}
            variant="contained"
            sx={{
              
              borderRadius: "15px",
              fontSize: "18.4",
              border: "2px solid #919191",
              backgroundColor: "var(--gold-color)",
              color: "var(--dpurple-color)",
              borderColor:"var(--bgray-color)",
              "&:hover": {
                backgroundColor: "var(--bgray-color)",
                color: "var(--dpurple-color)",
              },
            }}
            color="primary"
          >
            sign inwith google
            <FcGoogle
              className={Styles.gg}
            />
          </Button>
          <div className={Styles.frameParent}>
            <div className={Styles.frameWrapper}>
              <div className={Styles.orFrameParent}>
                <div className={Styles.orFrame}>
                  <div className={Styles.textUseEmail}>
                    <div className={Styles.orUseUr}>or use ur email account</div>
                  </div>
                  <div className={Styles.nameEmailContainer}>
                    <TextField
                      className={Styles.framesetNameEmail1}
                      placeholder="Email"
                      type="email"
                      id="email"
                      name="email"
                      variant="outlined"
                      sx={{
                        "& fieldset": { border: "none" },
                        "& .MuiInputBase-root": {
                          height: "60px",
                          backgroundColor: "#f0f0f2",
                          borderRadius: "10px",
                          fontSize: "20px",
                        },
                        "& .MuiInputBase-input": { color: "#354550" },
                      }}
                    />
                    <div className={Styles.passcontainer}>
                      <label htmlFor="password"></label>
                      <div className={Styles.passwordInput}>
                        <input
                          type={showPassword ? "text" : "password"}
                          id="pass"
                          name="password"
                          value={formData.password}
                          placeholder="Password"
                          onChange={handleInputChange}
                          required
                        />
                        <img
                          src={showPassword ? hide : eye}
                          alt="eye icons for password"
                          onClick={visiblePassword}
                          width={40}
                          height={40}

                          className={Styles.eyeIcon}
                        /></div>
                    </div>

                  </div>
                </div>
                <Button
                  className={Styles.button1}
                  disableElevation={true}
                  variant="contained"
                  sx={{
                    color: "var(--dpurple-color)",
                    fontSize: "18.4",
                    border: "2px solid #919191",
                    borderColor: "var(--bgray-color)",
                    backgroundColor: "var(--gold-color)",
                    borderRadius: "15px",
                    "&:hover": { background: "var(--bgray-color)" },
                    width: 426,
                    height: 48,

                  }}
                >
                  Sign up
                </Button>
              </div>
            </div>
            <img
              className={Styles.chocoIcon}
              // loading="eager"
              alt="choco"
              src={signin}
            />
          </div>
        </form>


      </div>
    </>
  )
}

export default Signin;