/* eslint-disable jsx-a11y/anchor-is-valid */
import { useRef } from 'react';
import './stile.css';


function Navbar() {
    const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("slide");
	};
  return (
    <>
    <nav>
        <div className="logo">
            <h4>RCTN Portal</h4>
        </div>
        <ul ref={navRef}>
            <li><a href="">Home</a></li>
            <li><a href="">Programming</a></li>
            <li><a href="">COVID-19</a></li>
            <li><a href="">Saved</a></li>
        </ul>
        <div className="menu-toggle">
            <input type="checkbox" onClick={showNavbar} />
            <span></span><span></span><span></span>
        </div>
    </nav>
    </>
  );
}

export default Navbar;