import React from "react";
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from './NavbarElements'
import logo from '../../Assets/Images/logo.png'

const Navbar = () => {
        return(
            <>
                <Nav>
                    <NavLink to="/">
                        <img src={logo} alt="logo" style={{height: '30px'}}/>
                    </NavLink>
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
                        <NavLink to="/sign-up" activeStyle>
                            Sign Up
                        </NavLink>
                        <NavBtnLink to="/signin">Sign In</NavBtnLink>
                    </NavMenu>
                </Nav>
            </>
        )
};

export default Navbar;