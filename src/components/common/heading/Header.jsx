import React, { useState } from "react"
import Head from "./Head"
import "./header.css"
import { Link } from "react-router-dom"


const Header = () => {
    const [click, setClick] = useState(false)
  return (
    <>
        <Head />
        <header>
            <nav className='flexSB'>
                <ul className={click ? "mobile-nav" : "flexSB"} onClick={()=> setClick(false)} >
                    <li>
                        <Link to="/">Trang Chủ</Link>
                    </li>
                    <li>
                        <Link to="/cackhoahoc">Các khóa học</Link>
                    </li>
                    <li>
                        <Link to="/vechungtoi">Về Chúng Tôi</Link>
                    </li>
                    <li>
                        <Link to="/daykem">Dạy Kèm</Link>
                    </li>
                    <li>
                        <Link to="/hocphi">Học Phí</Link>
                    </li>
                    <li>
                        <Link to="/cacbaiviet">Các bài viết</Link>
                    </li>
                    <li>
                        <Link to="/lienhe">Liên Hệ</Link>
                    </li>
                </ul>
                    <div className="start">
                        <div className="button">DANH MỤC</div>
                    </div>
                <button className="toggle" onClick={() => setClick(!click)}>
                    {click ? <i className="fa fa-times"></i> : <i className="fa fa-bars"></i>}
                </button>
            </nav>
        </header>
    </>
  )
}

export default Header