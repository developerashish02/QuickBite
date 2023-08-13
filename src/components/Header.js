import { HEADER_LOGO } from "../utils/constants";
import { useState } from "react";

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
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <li onClick={handleAuth}> {auth ? "Logout" : "Login"} </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
