import React from 'react'
import Title from '../../common/title/Title'
import "./hero.css"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className='row'>
              <Title subtitle='CHÀO MỪNG ĐẾN VỚI WEBSITE' title= 'GIA SƯ HOÀN VŨ' />
            <p>Chào mừng các học viên đến với trang web. Nếu cần luyện thi,dạy kèm xin vui lòng liên hệ qua các SĐT-MXH-GMAIL.</p>
            <div className="button">
              <a href="/vechungtoi">
                <button className='primary-btn'>
                  BẮT ĐẦU KHÁM PHÁ <i className="fa fa-long-arrow-alt-right"></i>
                </button>
              </a>
              <a href="/cackhoahoc">
                <button>
                  XEM CÁC KHÓA HỌC <i className="fa fa-long-arrow-alt-right"></i>
              </button>
              </a>
            </div>
          </div>
        </div>
      </section>
      <div className='marigin'></div>
    </>
  )
}

export default Hero