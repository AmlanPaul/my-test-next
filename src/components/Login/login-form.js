import classes from "../../styles/login.module.css";
import { useState, useRef } from "react";
import { setCookie } from "cookies-next";
import { useRouter } from "next/router";

function LoginForm(props) {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [isEmailError, setIsEmailError] = useState(false);
  const [isPasswordError, setIsPasswordError] = useState(false);
  const router=useRouter()

  function submitHandeler(event) {
    event.preventDefault();
    setIsEmailError(false);
    setIsPasswordError(false);
    const loginData = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(loginData),
    };
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB0-XkZ6P5xkwXYIQCQMQMuWtVt_RzhYic",
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.error && data.error.code == 400) { 
          if (data.error.message == "EMAIL_NOT_FOUND" || data.error.message == "INVALID_EMAIL") {
            setIsEmailError(true);
          }
          if (data.error.message == "INVALID_PASSWORD") {
            setIsPasswordError(true);
          }
        }
        if(!data.error) {
            setCookie("isLogin", true);
            setCookie("idToken", data.idToken);
            router.push("/");
        }
      })
      .catch((error) => {
        throw error;
      });
  }
  return (
    <>
      <form onSubmit={submitHandeler}>
        <input
          type="text"
          id="email"
          className={`${classes.fadeIn} ${classes.second}`}
          name="login"
          placeholder="Email Id"
          ref={emailRef}
        />
        {isEmailError && (
          <div className="alert alert-danger" role="alert">
              User not registered, plaese check the email
          </div>
        )}
        <input
          type="password"
          id="password"
          className={`${classes.fadeIn} ${classes.third}`}
          name="login"
          placeholder="Password"
          ref={passwordRef}
        />
        {isPasswordError && (
          <p className="alert alert-danger" role="alert">
            Password not matched , please check the password
          </p>
        )}
        <input
          type="submit"
          className={`${classes.fadeIn} ${classes.fourth}`}
          value="Log In"
        />
      </form>
    </>
  );
}

export default LoginForm;
