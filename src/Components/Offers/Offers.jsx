import React from 'react'
import './offers.css'
import exclusive_image from '../Assets/exclusive.png'

const Offers = () => {
  return (
    <div className='offers'>
        <div className="offers-left">
            <h1>Exclusive</h1>
            <h1>Offers For You</h1>
            <p>BEST SELLERS</p>
            <button>Xem Ngay</button>
        </div>
        <div className="offers-right">
            <img src={exclusive_image} alt="" />
        </div>        
    </div>
  )
}

export default Offers