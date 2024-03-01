import {
  Button,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import styles from "./signUp.module.css";
import hide from "../../assets/Icons/hide.png"
import eye from "../../assets/Icons/eye.png"
import signin from "../../assets/Images/signin.png";
import { useNavigate } from "react-router-dom";
import {toast} from "react-toastify";
import axios from "axios";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const visiblePassword = () => {
    setShowPassword(!showPassword);
  }

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate =useNavigate();

  const [loading, setLoading] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    })
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/user/signup", formData);
      console.log(response);
      toast.success("Sign Up Successfuly", response.message);
      navigate("/");
    } catch (error) {
      console.error("Error signing up:", error);
      toast.error("Error signing up. Please try again.");
    }
  };


  return (
    <div className={styles.signup}>
      <h1 className={styles.startNewJourney}>Start New Journey!</h1>
      <form className={styles.buttonParent} onSubmit={handleSubmit}>
        <Button
          className={styles.button}
          disableElevation={true}
          variant="contained"
          sx={{
            
            border: "2px solid #919191",
            color: "var(--dpurple-color)",
            fontSize: "18.4",
            backgroundColor: "var(--gold-color)",
            borderRadius: "15px",
            borderColor: "var(--bgray-color)",

            "&:hover": { background: "var(--bgray-color)" },
            width: 426,
            height: 48,
            
          }}
        >
          Sign up with google <FcGoogle className={styles.gg} />
        </Button>
        <div className={styles.frameParent}>
          <div className={styles.frameWrapper}>
            <div className={styles.orFrameParent}>
              <div className={styles.orFrame}>
                <div className={styles.textUseEmail}>
                  <div className={styles.orUseUr}>or use ur email account</div>
                </div>
                <div className={styles.nameEmailContainer}>
                  <TextField
                    className={styles.framesetNameEmail}
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    placeholder="Name"
                    variant="outlined"
                    onChange={handleInputChange}
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
                  <TextField
                    className={styles.framesetNameEmail1}
                    placeholder="Email"
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
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
                  <div className={styles.passcontainer}>
                    <label htmlFor="password"></label>
                    <div className={styles.passwordInput}>
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

                        className={styles.eyeIcon}
                      /></div>
                  </div>

                </div>
              </div>
              <Button
              type="submit"
          className={styles.button}
          disableElevation={true}
          variant="contained"
          sx={{
            
            color: "var(--dpurple-color)",
            fontSize: "18.4",
            border: "2px solid #919191",
            backgroundColor: "var(--gold-color)",
            borderRadius: "15px",
            borderColor: "var(--bgray-color)",

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
            className={styles.chocoIcon}
            loading="eager"
            alt="choco"
            src={signin}
          />
        </div>
      </form>
    </div>
  );
};

export default SignUp;