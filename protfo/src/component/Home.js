import React, { useState } from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
} from 'reactstrap';
import { NavLink, Outlet } from 'react-router-dom';
export const Home = () => {
    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);
    return (
        <>
            <header className='header'>
                <Navbar color="faded" light className='navbar-expand-lg container'>
                    <NavbarBrand href="/" className="me-auto">
                        reactstrap
                    </NavbarBrand>
                    <NavbarToggler onClick={toggleNavbar} className="me-2" />
                    <Collapse isOpen={!collapsed} navbar>
                        <Nav navbar className='ms-auto'>
                            <NavItem>
                                <NavLink to="/">About</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="projects" className='mx-md-4 mx-0'>
                                    Projects
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="Contact">
                                    Contact Me
                                </NavLink>
                            </NavItem>
                            <NavItem>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </header>
            <Outlet />
        </>
    )
}
