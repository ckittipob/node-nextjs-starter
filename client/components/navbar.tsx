import Link from "next/link";
import {useContext} from 'react';
import { useRouter } from "next/router";
import { faUser, faPowerOff } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AuthContext from '@/context/AuthContext';

const Navbar = () => {
  const router = useRouter();
  let currentPage = router.pathname;


  const {user, logout} = useContext(AuthContext);
  return (
    <header id="header-home">
      <div className="nav-container">
        <nav id="main-nav">
          <img src={"/images/logo.png"} id="logo" />
          <input className="menu-btn" type="checkbox" id="menu-btn" />
          <label className="menu-icon" htmlFor="menu-btn">
            <span className="nav-icon"></span>
          </label>
          <ul className="menu menu-items">
            <li>
              <Link href={"/"}>

              <a  className={currentPage === "/" ? "current" : ""}>
                HOME
              </a>
              </Link>
            </li>
            <li>
            <Link href={"/examples"}>
              <a
                href={"/examples"}
                className={currentPage === "/examples" ? "current" : ""}
              >
                EXAMPLE
              </a>
              </Link>
            </li>
          </ul>
          <ul className="menu user">
            <li>
              {!user ? (
                <a href={"/login"} className="user-icon">
                  <FontAwesomeIcon icon={faUser}/>&nbsp;&nbsp; Login
                </a>
              ) : (
                <a onClick={() => logout()} className="user-icon">
                  <FontAwesomeIcon icon={faPowerOff}/>&nbsp;&nbsp; Logout
                </a>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
