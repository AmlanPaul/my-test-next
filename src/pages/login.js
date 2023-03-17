import Head from "next/head";
import LoginForm from "../components/Login/login-form";
import classes from "../styles/login.module.css";

const Home = () => {
  return (
    <>
      <div className={`${classes.wrapper} ${classes.fadeInDown}`}>
        <div id={classes.formContent}>
          <div className={`${classes.fadeIn} ${classes.first}`}>
            <img
              src="https://img.icons8.com/ios-filled/256/user.png"
              id={classes.icon}
              alt="User Icon"
            />
          </div>

          <LoginForm />

          <div id={classes.formFooter}>
            <a className={classes.underlineHover} href="#">
              Forgot Password?
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
