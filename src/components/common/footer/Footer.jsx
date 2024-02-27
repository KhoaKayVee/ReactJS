import React from 'react'
import "./footer.css"
import { blog } from '../../../dummydata'

const Footer = () => {
  return (
    <>
        <section className='newletter'>
            <div className="container flexSB">
                <div className="left row">
                    <h1>Bản tin mới nhất, hãy theo dõi và nhận thông tin cập nhật mới nhất</h1>
                    <p>Thạc sĩ Ngô Minh Hoàn Vũ, Ôn thi + Luyện Thi</p>
                </div>
                <div className="right row">
                    <input type="text" placeholder='Nhập địa chỉ email' />
                    <i className='fa fa-paper-plane'></i>
                </div>
            </div>
        </section>
        <footer>
            <div className="container padding">
                <div className="box logo">
                    <h1>GIA SƯ HOÀN VŨ</h1>
                    <span> SỰ LỰA CHỌN TUYỆT ĐỐI  </span>
                    <p>CÁC TRANG MẠNG XÃ HỘI</p>
                    <a href="https://www.facebook.com/hhhoanvu">
                        <i className='fab fa-facebook-f icon'></i>
                    </a>
                    <a href="https://www.facebook.com/ngoanhkhoa13062001/">
                        <i className='fab fa-instagram icon'></i>
                    </a>    
                    <i className='fab fa-twitter icon'></i>
                </div>
                <div className="box link">
                    <h3>ĐĂNG KÝ KHÓA HỌC</h3>
                    <a href="/cackhoahoc">
                        <h4 className='ViewCourse'>Xem các khóa học</h4>
                    </a>
                </div>
                <div className="box link">
                    <h3>HỌC PHÍ MỖI KHÓA HỌC</h3>
                    <a href="/hocphi">
                        <h4 className='FeeCourse'>Xem học phí khóa học</h4>
                    </a>
                </div>
                <div className="box">
                    <h3>Bài Đăng Gần Đây</h3>
                    {blog.slice(0,3).map((val) => {
                        return (
                        <a href="/cacbaiviet">
                        <div className="items flexSB">
                            <div className="img">
                                <img src={val.cover} alt="" />
                            </div>
                            <div className="text">
                                <span>
                                    <i className='fa fa-user'></i>
                                    <label htmlFor="">{val.type}</label>
                                </span>
                                <span>
                                    <i className='fa fa-calendar-alt'></i>
                                    <label htmlFor="">{val.date}</label>
                                </span>
                                <h4>{val.title.slice(0, 40)}...</h4>
                            </div>
                        </div>
                        </a>
                        )
                    })}
                </div>
                <div className="box last">
                    <h3>ĐỊA CHỈ LIÊN LẠC</h3>
                    <ul>
                        <li>
                            <i className='fa fa-map'></i>
                            110/7 Xóm Chiếu P14 Q4 TPHCM
                        </li>
                        <li>
                            <i className='fa fa-phone-alt'></i>
                            0909340027
                        </li>
                        <li>
                            <i className='fa fa-paper-plane'></i>
                            hoanvu1996rm@gmail.com
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
        <div className="legal">
            <p>
                Copyright 2023 © GiaSuHoanVu <i className='fa fa-heart'></i> Website thuộc bản quyền của NgôAnhKhoa
            </p>
        </div>
    </>
  )
}

export default Footer