import { Link } from "react-router-dom/cjs/react-router-dom.min"
import "./header.css"
import React from 'react'

const Head = () => {
  return (
    <>
        <section className='head'>
            <div className='container flexSB'>
                <div className='logo'>
                    <a className='Icon logo'  href="/">
                        <img src="../HViconlogo.png" alt="HoanVu" />
                    </a>
                    <h1>GIA SƯ HOÀN VŨ</h1>
                    <span>WEB ĐĂNG KÝ KHÓA HỌC & ÔN + LUYỆN THI </span>
                </div>

                <div className='social'>
                    <a className="hreffb" href='https://www.facebook.com/hhhoanvu'>
                        <i className='fab fa-facebook-f icon'></i>
                    </a>
                    <a className="hrefins" href='https://www.instagram.com/kayvee0cap/'>
                        <i className='fab fa-instagram icon'></i>
                    </a>
                    <a className="hreftwitter" href='https://www.facebook.com/ngoanhkhoa13062001/'>
                        <i className='fab fa-twitter icon'></i>
                    </a>
                    <a className="hrefyoutube" href='https://www.youtube.com/@khoangoanh2705'>
                        <i className='fab fa-youtube icon'></i>
                    </a>
                </div>
            </div>
        </section>
    </>
  )
}

export default Head