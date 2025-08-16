import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="container">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="about">About Us</Link>
                </li>
                <li>
                    <Link to="projects">Projects</Link>
                </li>
                <li>
                    <Link to="resources">Resources</Link>
                </li>
                <li>
                    <Link to="contact">Contact Us</Link>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
