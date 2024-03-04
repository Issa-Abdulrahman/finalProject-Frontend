import React, { useContext, useState } from "react";
import Styles from "./signIn.module.css"
import { Button, TextField } from "@mui/material";
import { FcGoogle } from "react-icons/fc";
import hide from "../../assets/Icons/hide.png"
import eye from "../../assets/Icons/eye.png"
import signin from "../../assets/Images/signin.png";
import axiosInstance from "../../utils/axiosInstance";
import  { Link, useNavigate } from "react-router-dom";
import {toast} from "react-toastify";
import {signInWithPopup} from "firebase/auth";
import { auth, provider } from '../../Firebase';
import { AuthContext } from "../../context/AuthContext";
import apiCall from "../../hooks/useApi";





function Signin() {
  const { setUser, fetchUserData } = useContext(AuthContext);
  const [isPending, setIsPending] = useState(false);
  // const useApi =  useApi();
  const navigate = useNavigate();
  const [disabled, setDisabled] = useState(false);
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

  //signin
  const handleSubmit = async (event) => {
    event.preventDefault();

    setIsPending(true);
    if(!formData.email || !formData.password){
      toast.error( "Please fill out all fields");
      setIsPending(false);

    }else{
      setFormData({
        email:"",
        password:"",
      });
      try{
        await apiCall({
          url: "/user/login",
          method : "post",
          data: {
            email: formData.email,
            password: formData.password,
            role: "user",
          }
        });
        await fetchUserData();
        toast.success( "Logged in successfully!");
        setIsPending(false);
        navigate("/");
      } catch(error){
        if(
          error.response &&
          error.response.data &&
          error.response.data.errors
        ){
          const {errors} = error.response.data;
          if(errors.email) {
            const emailError = errors.email;
            toast.error(emailError);
          }
          if (errors.password){
            const passwordError = errors.password;
            toast.error(passwordError);
          }
        } else{
          toast.error(error.messgae);
        }
        setIsPending(false);
      }
    }
  };

  //google signIn
  const handleGoogle = async () =>{
    try{
      const data = await signInWithPopup( auth, provider);
      setDisabled(!disabled);
      const res = await axiosInstance.post(
        "/user/gsignup",
        {
          name: data.user.displayName,
          email: data.user.email,
          role: "guest"
        },
        {
          headers:{
            "Content-Type": "multipart/form-data"
          }
        }
      );
      setIsPending(false);
      toast.success("Signed in Successfully");
      if(res){
        setUser(res.data.token.data);
        console.log(res.data.token.data);
        setDisabled(!disabled);

      }else{
        setUser("no user found");
      }
      navigate("/");
    } catch (err) {
      setDisabled(false);
      if(err.code === "auth/popup-closed-by-user"){
        console.log("exited the google auth");
      }
    }
  }

  return (
    <>
      <div className={Styles.signin}>
        <h1 className={Styles.welcome}>Welcome Back!</h1>


        <form className={Styles.form} >

          <Button
            // fullWidth
            className={Styles.button}
            onClick={handleGoogle}
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
            sign in with google
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
                  type="submit"
                  disabled={isPending}
                  variant="contained"
                  onSubmit={handleSubmit}
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
                  Sign in
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