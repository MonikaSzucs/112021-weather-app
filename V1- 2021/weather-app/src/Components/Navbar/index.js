import React from "react";
import {NavLink, Bars, NavMenu, NavBtnLink} from './NavbarElements'
import logo from '../../Assets/Images/logo.png'
import '../../scss/style.scss';

const Navbar = () => {
        return(
            <>
                <div className="nav"> 
                    <div className="logo" to="/" >
                        <img src={logo} alt="logo"/>
                    </div>
                    <Bars/>
                    <NavMenu>
                        <NavLink to="/about" activeStyle>
                            About
                        </NavLink>
                        <NavLink to="/services" activeStyle>
                            Services
                        </NavLink>
                        <NavLink to="/contact-us" activeStyle>
                            Contact Us
                        </NavLink>
                    </NavMenu>
                </div>
            </>
        )
};

export default Navbar;