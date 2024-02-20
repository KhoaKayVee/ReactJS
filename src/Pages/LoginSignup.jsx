import React from 'react'
import './CSS/loginsignup.css'

const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Đăng ký</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder='Tên của bạn'/>
          <input type="email" placeholder='Email của bạn'/>
          <input type="password" placeholder='Mật khẩu'/>
        </div>
        <button>Tiếp tục</button>
        <p className="loginsignup-login">Đã có tài khoản? <span>Đăng nhập ngay</span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>Bằng việc tiếp tục, tôi đồng ý với các điều khoản & chính sách bảo mật</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup