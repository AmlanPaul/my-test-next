import Link from "next/link";
import { deleteCookie } from "cookies-next";
import { Fragment } from "react";
import { useRouter } from "next/router";

function Logout(props) {
  const router = useRouter();
  function clickHandeler(event) {
    deleteCookie("isLogin");
    deleteCookie("idToken");
    setTimeout(() => {
      router.push("/login");
    }, 500);
  }
  return (
    <Fragment>
      <a onClick={clickHandeler} className="nav-link">
        Logout
      </a>
    </Fragment>
  );
}

export default Logout;
