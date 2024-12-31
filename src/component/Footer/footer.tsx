import React from "react";
import './footer.css';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import electionLogo from '../../images/election commison logo.jpg'; // Adjusted path

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Section 1: Logo and Info */}
                <div className="footer-info">
                    <img 
                        src={electionLogo} 
                        alt="Election Commission Logo" 
                        className="footer-logo" 
                    />
                    <p className="footer-description">
                        The Election Commission of India is an autonomous constitutional authority responsible for administering election processes in India. 
                        <br />
                        Nirvachan Sadan, Ashoka Road, New Delhi 110001
                    </p>
                </div>

                {/* Section 2: General Election Info */}
                <div className="footer-election">
                    <div className="headfoot">
                        <h3>GENERAL ELECTION 2026</h3>
                    </div>
                    <a 
                        href="https://elections24.eci.gov.in/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="footer-election-link"
                    >
                        elections26.eci.gov.in
                    </a>
                </div>

                {/* Section 3: Quick Links */}
                <div className="footer-links">
                    <div className="footerheadindlink"></div>
                    <div className="headfoot">
                        <h3>Quick Links</h3>
                    </div>
                    <ul>
                        <li><a href="#">About ECI</a></li>
                        <li><a href="#">Apply for Voter Card</a></li>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">Download cVIGIL</a></li>
                    </ul>
                </div>

                {/* Section 4: Social Media */}
                <div className="footer-social">
                    <div className="headfoot">
                        <h3>Follow Us</h3>
                    </div>
                    <div className="social-icons">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <FaFacebook className="social-icon" />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <FaTwitter className="social-icon" />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <FaInstagram className="social-icon" />
                        </a>
                        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                            <FaYoutube className="social-icon" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="footer-copyright">
                &copy; 2026 Election Commission of India. All Rights Reserved.
            </div>
        </footer>
    );
};

export default Footer;
