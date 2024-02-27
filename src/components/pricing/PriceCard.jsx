import React from 'react'
import { price } from '../../dummydata'
import "./price.css"

const PriceCard = () => {
  return (
    <>
    {price.map((val) => (
        <div className="items shadow">
            <h4>{val.name}</h4>
            <h1>
                {val.price}
                <span> VND </span>
            </h1>
            <p>{val.desc}</p>
            <button className='outline-btn'>BẮT ĐẦU</button>
        </div>
    ))}
    </>
  )
}

export default PriceCard