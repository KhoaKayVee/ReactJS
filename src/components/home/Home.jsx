import React from 'react'
import Hero from './hero/Hero'
import AboutCard from '../about/AboutCard'
import HAbout from './HAbout'
import Hblog from './Hblog'
import Hprice from './Hprice'
import Test from './testiomonal/Test'


const Home = () => {
    return (
        <>
            <Hero />
            <AboutCard/>
            <HAbout/>
            <Test />
            <Hblog />
            <Hprice />
        </>
    )
}

export default Home