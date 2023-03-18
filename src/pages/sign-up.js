import Head from "next/head";
import Link from "next/link";
import Classes from "../styles/signup.module.css";
import { useState, useRef } from "react";
import { useRouter } from "next/router";

function SignUp(props) {
  const userNameRef = useRef();
  const userEmailRef = useRef();
  const userPassRef = useRef();
  const userConfPassRef = useRef();
  const [isPasswordError, setIsPasswordError] = useState(false);
  const [isResponceError, setIsResponceError] = useState(false);
  const router = useRouter();

  function submitHandeler(event) {
    event.preventDefault();
    if (userPassRef.current.value === userConfPassRef.current.value) {
      const loginData = {
        displayName: userNameRef.current.value,
        email: userEmailRef.current.value,
        password: userConfPassRef.current.value,
      };
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loginData),
      };
      fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB0-XkZ6P5xkwXYIQCQMQMuWtVt_RzhYic",
        requestOptions
      )
        .then((response) => response.json())
        .then((data) => {
            if(!data.error) {
                router.push('/confirm-registration');
            }
            if(data.error) {
                setIsResponceError(true);
            }
        })
    } else {
      setIsPasswordError(true);
    }
  }
  return (
    <>
      <Head>
        <title>User Sign Up form</title>
      </Head>
      <div>
        <div className={Classes.signupform}>
          <form onSubmit={submitHandeler}>
            <h2>Sign Up</h2>
            <p>Please fill in this form to create an account!</p>
            <hr />
            <div className={Classes.formgroup}>
              <div className={Classes.inputgroup}>
                <div className={Classes.inputgroupprepend}>
                  <span className={Classes.inputgrouptext}>
                    <span className="fa fa-user"></span>
                  </span>
                </div>
                <input
                  type="text"
                  className={Classes.formcontrol}
                  name="username"
                  placeholder="Username"
                  required="required"
                  ref={userNameRef}
                />
              </div>
            </div>
            <div className={Classes.formgroup}>
              <div className={Classes.inputgroup}>
                <div className={Classes.inputgroupprepend}>
                  <span className={Classes.inputgrouptext}>
                    <i className="fa fa-paper-plane"></i>
                  </span>
                </div>
                <input
                  type="email"
                  className={Classes.formcontrol}
                  name="email"
                  placeholder="Email Address"
                  required="required"
                  ref={userEmailRef}
                />
              </div>
            </div>
            <div className={Classes.formgroup}>
              <div className={Classes.inputgroup}>
                <div className={Classes.inputgroupprepend}>
                  <span className={Classes.inputgrouptext}>
                    <i className="fa fa-lock"></i>
                  </span>
                </div>
                <input
                  type="password"
                  className={Classes.formcontrol}
                  name="password"
                  placeholder="Password"
                  required="required"
                  ref={userPassRef}
                />
              </div>
            </div>
            <div className={Classes.formgroup}>
              <div className={Classes.inputgroup}>
                <div className={Classes.inputgroupprepend}>
                  <span className={Classes.inputgrouptext}>
                    <i className="fa fa-lock"></i>
                    <i className="fa fa-check"></i>
                  </span>
                </div>
                <input
                  type="password"
                  className={Classes.formcontrol}
                  name="confirm_password"
                  placeholder="Confirm Password"
                  required="required"
                  ref={userConfPassRef}
                />
              </div>
              {isPasswordError && (
                <p className="alert alert-danger" role="alert">
                  Password not matched , please check the password.
                </p>
              )}
              {isResponceError && (
                <p className="alert alert-danger" role="alert">
                  Some thing went wrong ! Please check the email and password !
                </p>
              )}
            </div>
            <div className={Classes.formgroup}>
              <label className={Classes.formchecklabel}>
                <input type="checkbox" required="required" /> I accept the{" "}
                <a href="#">Terms of Use</a> &amp;{" "}
                <a href="#">Privacy Policy</a>
              </label>
            </div>
            <div className={Classes.formgroup}>
              <button type="submit" className="btn btn-primary btn-lg">
                Sign Up
              </button>
            </div>
          </form>
          <div className="text-center">
            Already have an account? <Link href="/login">Login here</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
