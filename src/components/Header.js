import React, { useState } from 'react';

import facebook from "../assets/icons/facebook.svg";
import instagram from "../assets/icons/instagram.svg";
import twitter from "../assets/icons/twitter.svg";
import logo from "../assets/icons/logo.svg";
import telephone from "../assets/icons/telephone.svg";
import email from "../assets/icons/email.svg";
import login from "../assets/icons/login.svg";
import lock from "../assets/icons/lock.svg";

import { Navbar, Nav, NavLink, NavDropdown, Modal, Button } from "react-bootstrap";
import '../styles/header.scss'
import '../styles/modal.scss'

export const Header = props => {

    let [showModal, setShowModal] = useState(false);

    return (
        <div className="container-header">
            <div className="header-mobile">
                <img className="logo" src={logo} alt="logo-site" />
                <Navbar>
                    <Nav className="navbar-mobile">
                        <NavLink href="#home">HOME</NavLink>
                        <NavLink href="#services">SERVICES</NavLink>
                        <NavLink href="#about">ABOUT</NavLink>
                        <NavLink href="#contact">CONTACT</NavLink>

                    </Nav>
                </Navbar>
            </div>
            <div className="header-desktop">
                <div className="header-top">
                    <div className="div-contact">
                        <div className="span-telephone">
                            <img src={telephone} alt="Telefone" width="10" />
                            <span>+5512341234</span>
                        </div>
                        <div className="span-email">
                            <img src={email} alt="Email" width="10" />
                            <span>@demo.example.com</span>
                        </div>
                    </div>
                    <div className="div-socials">
                        <a href="http://facebook.com" target='blank'>
                            <img src={facebook} alt="Facebook" width="20" />
                        </a>
                        <a href="http://instagram.com" target='blank'>
                            <img src={instagram} alt="Instagram" width="20" />
                        </a>
                        <a href="http://twitter.com" target='blank'>
                            <img src={twitter} alt="Twitter" width="20" />
                        </a>
                    </div>
                    <div className="div-login">
                        <span onClick={setShowModal}>Login</span>
                        <span>Register</span>
                    </div>
                </div>
                <div className="header-navbar">
                    <img className="logo" src={logo} alt="logo-site" />
                    <Navbar className="navbar-desktop">
                        <NavDropdown title="DROPDOWN 1"
                            id="collasible-nav-dropdown"
                            renderMenuOnMount={true}
                        >
                            <NavDropdown.Item href="#action3">OPTION 1</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">OPTION 2</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">OPTION 3</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="HOME"
                            id="collasible-nav-dropdown"
                            renderMenuOnMount={true}
                        >
                            <NavDropdown.Item href="#action3">OPTION 1</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">OPTION 2</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">OPTION 3</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="SERVICES"
                            id="collasible-nav-dropdown"
                            renderMenuOnMount={true}
                        >
                            <NavDropdown.Item href="#action3">OPTION 1</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">OPTION 2</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">OPTION 3</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="ABOUT"
                            id="collasible-nav-dropdown"
                            renderMenuOnMount={true}
                        >
                            <NavDropdown.Item href="#action3">OPTION 1</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">OPTION 2</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">OPTION 3</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="CONTACT"
                            id="collasible-nav-dropdown"
                            renderMenuOnMount={true}
                        >
                            <NavDropdown.Item href="#action3">OPTION 1</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">OPTION 2</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">OPTION 3</NavDropdown.Item>
                        </NavDropdown>
                    </Navbar>
                </div>
            </div>
            <Modal
                show={showModal}
                onHide={() => setShowModal(false)}
                size="sm"
                dialogClassName="modal-90h"
            >
                <Modal.Header closeButton>
                    <Modal.Title>Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <span className="login-span">
                        <img src={login} alt="Campo de login" width="25" />
                        <input type="text" placeholder="E-mail"></input>
                    </span>
                    <span className="password-span">
                        <img src={lock} alt="Campo de senha" width="30" />
                        <input type="password" placeholder="Password"></input>
                    </span>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>Close</Button>
                    <Button variant="primary">Login</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}