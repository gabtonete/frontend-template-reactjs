import React from 'react';

import facebook from "../assets/icons/facebook.svg";
import instagram from "../assets/icons/instagram.svg";
import twitter from "../assets/icons/twitter.svg";
import telephone from "../assets/icons/telephone.svg";
import email from "../assets/icons/email.svg";

import '../styles/footer.scss';

export const Footer = () => {
    return (
        <div className="container-footer">
            <div className="div-contact">
                <div id="socials" className="social">
                    <a href="https://github.com/gabtonete/frontend-template-reactjs" target='blank' rel="noopener noreferrer">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="github" width="20" />
                    </a>
                    <a href="http://facebook.com" target='blank' rel="noopener noreferrer">
                        <img src={facebook} alt="Facebook" width="20" />
                    </a>
                    <a href="http://instagram.com" target='blank' rel="noopener noreferrer">
                        <img src={instagram} alt="Instagram" width="20" />
                    </a>
                    <a href="http://twitter.com" target='blank' rel="noopener noreferrer">
                        <img src={twitter} alt="Twitter" width="20" />
                    </a>
                </div>
                <div className="social">
                    <img src={telephone} alt="Telefone" width="10" />
                    <span>+5512341234</span>
                </div>
                <div className="social">
                    <img src={email} alt="Email" width="10" />
                    <span>@demo.example.com</span>
                </div>

            </div>
        </div>
    )
}