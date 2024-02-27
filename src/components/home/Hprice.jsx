import React from 'react'
import PriceCard from '../pricing/PriceCard'
import Title from '../common/title/Title'

const Hprice = () => {
  return (
    <>
      <section className='hprice padding'>
        <Title subtitle='Giá của chúng tôi' title='Giá cả & Các gói khóa học' />
        <div className='price container grid'>
          <PriceCard />
        </div>
      </section>
    </>
  )
}

export default Hprice