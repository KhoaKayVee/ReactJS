import React from 'react'
import "./contact.css"
import Back from "../common/back/Back"

const Contact = () => {

    const map = 'https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d251637.95196238213!2d105.6189045!3d9.779349!3m2!1i1024!2i768!4f13.1!5e0!3m2!1svi!2s!4v1702911703378!5m2!1svi!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'

    return (
    <>
        <Back title=".cách liên hệ." />
        <section className='contact padding'>
            <div className="container shadow flexSB">
                <div className="left row">
                    <iframe src={map} ></iframe>
                </div>
                <div className="right row">
                    <h1>Liên hệ với chúng tôi</h1>
                    <p>Vui lòng liên hệ với chúng tôi qua / facebook: HoanVu / SĐT: 0909340027</p>

                    <div className="items grid2">
                        <div className="box">
                            <h4>Địa chỉ:</h4>
                            <p>110/7 Xóm Chiếu P14 Q4 TPHCM</p>
                        </div>
                        <div className="box">
                            <h4>Email:</h4>
                            <p>hoanvu1996rm@gmail.com</p>
                        </div>
                        <div className="box">
                            <h4>Số điện thoại:</h4>
                            <p>0909340027</p>
                        </div>
                    </div>

                    <form action="">
                        <div className="flexSB">
                            <input type="text" placeholder='Tên' />
                            <input type="email" placeholder='Email' />
                        </div>
                        <input type="email" placeholder='Subject' />
                        <textarea cols="30" rows="10">
                            Tạo tin nhắn tại đây...
                        </textarea>
                        <button className='primary-btn'>GỬI TIN NHẮN</button>
                    </form>

                    <h3>Theo dõi chúng tôi tại đây</h3>
                    <div>
                        <span>FACEBOOK</span>
                        <span>TWITTER</span>
                        <span>INSTAGRAM</span>
                        <span>TELEGRAM</span>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Contact