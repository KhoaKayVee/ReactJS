import React from 'react'
import './footer.css'
import footer_logo from '../Assets/kayvee-logo.png'
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <a href="/">
                <img src={footer_logo} alt="" />
            </a>
            <p>KayveeClothing</p>
        </div>
        <ul className="footer-links">
            <li>Products</li>
            <li>Cửa hàng</li>
            <li>About us</li>
            <li>Liên hệ</li>
            <li>Thời gian làm việc</li>
        </ul>
        <div className="footer-social-icon">
            <div className="footer-icons-container">
                <a className='footer-icon' href="https://www.facebook.com/profile.php?id=100049210788287">
                    <FaFacebook/>
                </a>

                <a className='footer-icon' href="https://www.instagram.com/maverik.studio/">
                    <FaInstagram />
                </a>
                
                <a className='footer-icon' href="https://www.youtube.com/@khoangoanh2705">
                    <FaYoutube />
                </a>
            </div>
        </div>
        <div className="footer-copyright">
            <hr />
            <p>Copyright 2024 © - KayveeClothing </p>
        </div>
    </div>
  )
}

export default Footer