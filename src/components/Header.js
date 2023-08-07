import { HEADER_LOGO } from "../utils/constants";

const Header = () => {
    return (
        <div className="header">
            <div className="header_logo">
                <img src={HEADER_LOGO} alt="Logo.." />
            </div>

            <div className="header_nav">
                <ul>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Sign In</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

export default Header; 