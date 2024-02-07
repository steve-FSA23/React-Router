import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-links">
                <Link to="/">Home</Link>
                <Link to="/blue">Blue</Link>
                <Link to="/red">Red</Link>
            </div>
            <p>© 2024 Steve D. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
