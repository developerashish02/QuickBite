import { HEADER_LOGO } from "../utils/constants";
import { useState } from "react";

import { Link } from "react-router-dom";

const Header = () => {
    const [auth, setAuth] = useState(true);

    const handleAuth = () => {
        setAuth(!auth);
    };

    return (
        <div className="header">
            <div className="header_logo">
                <img src={HEADER_LOGO} alt="Logo.." />
            </div>

            <div className="header_nav">
                <ul>
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
        </div>
    );
};

export default Header;
