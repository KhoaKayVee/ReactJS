import React from 'react'
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min'

const Back = ( { title }) => {
    const location = useLocation()

  return (
    <>
        <section className='back'>
            <h2>Trang chủ / {location.pathname.split("/")[1]}</h2>
            <h1>{title}</h1>
        </section>
        <div className="marigin"></div>
    </>
  )
}

export default Back