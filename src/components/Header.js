import { HEADER_LOGO } from "../utils/constants";
import { useState } from "react";

import { Link } from "react-router-dom";
import useOnline from "../hooks/useOnline";

const Header = () => {
  const [auth, setAuth] = useState(true);
  const isOnline = useOnline();

  const handleAuth = () => {
    setAuth(!auth);
  };

  return (
    <div className="flex items-center justify-between shadow-md mb-4 rounded-md">
      <div className="m-2">
        <Link to="/">
          <img src={HEADER_LOGO} alt="Logo.." className="w-20" />
        </Link>
      </div>

      <ul className="flex space-x-6 mx-4 ">
        {/* <li>
          <span>Online Status: </span> {isOnline ? "🟢" : "🔴"}
        </li>

        <li>
          <Link to="/instamart">Instamart</Link>
        </li> */}
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>Cart</li>
        <li onClick={handleAuth}> {auth ? "Logout" : "Login"} </li>
      </ul>
    </div>
  );
};

export default Header;
