import { Fragment } from "react";
import MainHeader from "../Header/main-header";
import { hasCookie } from "cookies-next";

function Layout(props) {
  return (
    <Fragment>
      {hasCookie("isLogin") && <MainHeader />}
      {props.children}
    </Fragment>
  );
}

export default Layout;
