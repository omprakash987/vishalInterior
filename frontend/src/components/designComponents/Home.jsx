import React from 'react'
import Navbar from './Navbar'
import HeroSection from './HeroSection'
import StepsSection from './StepSection'
import ModernFlatDesign from './ModernFlatDesign'
import ModernFlatDesignReversed from './ModernFlatDesignReversed'
import PopularDesigns from './PopularDesign'
import Footer from './Footer'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <HeroSection/>
        <StepsSection/>
        <ModernFlatDesign/>
        <ModernFlatDesignReversed/>
        <PopularDesigns/>
        <Footer/>

    </div>
  )
}

export default Home