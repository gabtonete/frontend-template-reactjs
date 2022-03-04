import React, { useState } from 'react';

import { NavbarComponent } from '../components/NavbarComponent';

import facebook from "../assets/icons/facebook.svg";
import instagram from "../assets/icons/instagram.svg";
import twitter from "../assets/icons/twitter.svg";
import logo from "../assets/icons/logo.svg";
import telephone from "../assets/icons/telephone.svg";
import mail from "../assets/icons/email.svg";
import login from "../assets/icons/login.svg";
import lock from "../assets/icons/lock.svg";
import avatar from "../assets/icons/avatar.svg";
import logoutButton from "../assets/icons/logout.svg";

import { Navbar, Nav, NavLink, Modal, Button } from "react-bootstrap";
import '../styles/header.scss'
import '../styles/modal.scss'

export const Header = () => {
    const [nameRegister, setNameRegister] = useState('');
    const [emailRegister, setEmailRegister] = useState('');
    const [passwordRegister, setPasswordRegister] = useState('');

    const [loginField, setLoginField] = useState('');
    const [password, setPassword] = useState('');
    const [authenticated, setAuthenticated] = useState(false);

    const [msgSuccess, setMsgSuccess] = useState('');
    const [msgErro, setMsgErro] = useState('');

    let [showModalLogin, setShowModalLogin] = useState(false);
    let [showModalRegister, setShowModalRegister] = useState(false);

    const setNull = () => {
        setMsgSuccess('');
        setMsgErro('');
    }

    const register = () => {

        if (nameRegister && emailRegister && passwordRegister) {
            setMsgSuccess("Cadastro realizado, aguarde...");
            setTimeout(() => { setShowModalRegister(false) }, 1000)
            setTimeout(() => { setMsgSuccess('') }, 1005)
        } else {
            setMsgErro("Insira valores válidos");
        }
    }

    const loginModal = () => {
        if (loginField === emailRegister && password === passwordRegister) {
            setMsgSuccess("Usuário logado, aguarde...")
            setAuthenticated(true);
            setTimeout(() => { setShowModalLogin(false) }, 1000)
        } else {
            setMsgErro("Dados inválidos")
        }
    }

    const logout = () => {
        setNull();
        setAuthenticated(false);
    }

    return (
        <div className="container-header">
            <div className="header-mobile">
                {
                    authenticated === true
                        ?
                        <div className="logged">
                            <div>Welcome, {nameRegister}</div>
                            <div className="logout" onClick={logout}>
                                <span>Logout</span>
                                <img src={logoutButton} alt="Logout button" width="20" />
                            </div>
                        </div>
                        :
                        <div className="div-login">
                            <div onClick={setShowModalLogin}>Signin</div>
                            <span></span>
                            <div onClick={setShowModalRegister}>Signup</div>
                        </div>
                }
                <img className="logo" src={logo} alt="logo-site" />
                <Navbar>
                    <Nav className="navbar-mobile">
                        <NavLink href="#home">HOME</NavLink>
                        <NavLink href="#services">SERVICES</NavLink>
                        <NavLink href="#about">ABOUT</NavLink>
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
                            <img src={mail} alt="Email" width="10" />
                            <span>@demo.example.com</span>
                        </div>
                    </div>
                    <div className="div-socials">
                        <a href="https://github.com/gabtonete/frontend-template-reactjs" target='blank'>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="github" />
                        </a>
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
                    {
                        authenticated === true
                            ?
                            <div className="logged-desktop">
                                <div className="name-display">
                                    <span>Welcome,&nbsp;</span><span>{nameRegister}</span>
                                </div>
                                <div className="logout" onClick={logout}>
                                    <span>Logout</span>
                                    <img src={logoutButton} alt="Logout button" width="20" />
                                </div>
                            </div>
                            :
                            <div className="div-login">
                                <span onClick={setShowModalLogin}>Login</span>
                                <span className="registerButton" onClick={setShowModalRegister}>Register</span>
                            </div>
                    }
                </div>
                <div className="header-navbar">
                    <img className="logo" src={logo} alt="logo-site" />
                    <div className="navbar">
                        <NavbarComponent
                            text="HOME"
                            option1="PROFILE"
                            option2="ABOUT US"
                            option3="PORTAL"
                        />
                        <NavbarComponent
                            text="SERVICES"
                            option1="COURSES"
                            option2="METHODS"
                            option3="KNOWLEDGE"
                        />
                        <NavbarComponent
                            text="COFFEE"
                            option1="IS GOOD"
                            option2="IS NICE"
                            option3="IS HOT"
                        />
                        <NavbarComponent
                            text="PRODUCTS"
                            option1="PENCILS"
                            option2="BOOKS"
                            option3="DUNNO"
                        />
                    </div>

                </div>
            </div>
            <Modal
                show={showModalLogin}
                onHide={() => setShowModalLogin(false)}
                dialogClassName="modal-90h"
            >
                <Modal.Header closeButton>
                    <Modal.Title>Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <span className="login-span">
                        <img src={login} alt="Campo de login" width="30" />
                        <input
                            type="text"
                            placeholder="E-mail"
                            value={loginField}
                            onChange={e => setLoginField(e.target.value)}>
                        </input>
                    </span>
                    <span className="password-span">
                        <img src={lock} alt="Campo de senha" width="30" />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}>
                        </input>
                    </span>
                    {msgSuccess ? <p>{msgSuccess}</p> : <p>{msgErro}</p>}

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModalLogin(false)}>Close</Button>
                    <Button variant="primary" onClick={() => loginModal()}>Login</Button>
                </Modal.Footer>
            </Modal>
            <Modal
                show={showModalRegister}
                onHide={() => setShowModalRegister(false)}
                dialogClassName="modal-90h"
            >
                <Modal.Header closeButton>
                    <Modal.Title>Register</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <span className="name-span">
                        <img src={avatar} alt="Campo de nome" width="30" />
                        <input
                            type="text"
                            placeholder="Nome"
                            value={nameRegister}
                            onChange={e => setNameRegister(e.target.value)}>
                        </input>
                    </span>
                    <span className="login-span">
                        <img src={login} alt="Campo de login" width="30" />
                        <input
                            type="text"
                            placeholder="E-mail"
                            value={emailRegister}
                            onChange={e => setEmailRegister(e.target.value)}>
                        </input>
                    </span>
                    <span className="password-span">
                        <img src={lock} alt="Campo de senha" width="30" />
                        <input
                            type="password"
                            placeholder="Password"
                            value={passwordRegister}
                            onChange={e => setPasswordRegister(e.target.value)}>
                        </input>
                    </span>
                    {msgSuccess ? <p>{msgSuccess}</p> : <p>{msgErro}</p>}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModalRegister(false)}>Close</Button>
                    <Button variant="primary" onClick={() => register()}>Register</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}