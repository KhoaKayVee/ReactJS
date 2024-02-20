import React from 'react'
import './newsletter.css'

const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h1>Nhận ưu đãi độc quyền trong email của bạn</h1>
        <p>Theo dõi tin tức cập nhật mới nhất của chúng tôi</p>
        <div>
            <input type="email" placeholder='Email của bạn' />
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter