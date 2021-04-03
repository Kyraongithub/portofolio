import React from "react";
import { Link } from "react-router-dom";

import Button from "elements/Button";

import Logo from "assets/images/my/logo.png";
import Github from "assets/images/my/github.png";
import Linkedin from "assets/images/my/linkedin.png";

export default function Footer() {
  return (
    <footer className="site-footer center-content-mobile" id="contact">
      <div className="container">
        <div className="site-footer-inner">
          <div className="footer-top space-between text-xxs">
            <div className="brand">
              <Link to="">
                <img src={Logo} alt="Cube" width="75" height="75" />
              </Link>
            </div>
            <div className="footer-social">
              <ul className="list-reset">
                <li>
                  <a href="https://github.com/Kyraongithub" target="_blank">
                    <img src={Github} width="20" height="20" />
                    <title>Github</title>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/rizkykyra"
                    target="_blank"
                  >
                    <img src={Linkedin} width="20" height="20" />
                    <title>Linkedin</title>
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com/kyrmdhn_" target="_blank">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Instagram</title>
                      <g>
                        <circle cx="12.145" cy="3.892" r="1" />
                        <path d="M8 12c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z" />
                        <path d="M12 16H4c-2.056 0-4-1.944-4-4V4c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zM4 2c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2V4c0-.935-1.065-2-2-2H4z" />
                      </g>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom space-between text-xxs invert-order-desktop">
            <nav className="footer-nav">
              <ul className="list-reset">
                <li>Hire me, please! CV here</li>
                <li>
                  <a
                    href="https://drive.google.com/file/d/15Mk5ce3xnbBdRsYq3ofzw3httgfZXVXJ/view?usp=sharing"
                    target="_blank"
                  >
                    <Button isPrimary isWideMobile isSmall>
                      Get My CV
                    </Button>
                  </a>
                </li>
              </ul>
            </nav>
            <div className="footer-copyright">
              <ul className="list-reset">
                <li>
                  This website was made with reactjs and bootstrap4, also made
                  with love
                </li>
                <li>&copy; 2021 Rizky Ramadhan</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
