import React, {useState} from "react";
import About from "./About";
import { Link } from "react-router-dom";

export default function Navbar() {
    const [isActive, setActive] = useState(false)

    const handleClick = () => {
        setActive(!isActive)
    }

  return (<>
    <img className='imgLogo'src='/logo.png'></img>
    <div className="navbar">
        <Link to="/" className="title">Off Limits</Link>
        <a href="#" className="toggleButton" onClick={handleClick}>
            <span className="toggleBar"></span>
            <span className="toggleBar"></span>
            <span className="toggleBar"></span>
        </a>
        <div className={`navbarLinks ${isActive ? 'active' : ''}`}>
            <ul>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/search">Search</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                <li>
                    <Link to="/login">Log in</Link>
                </li>
            </ul>
        </div>
    </div>
    
    </>
  )
}
