import React, { useState } from 'react'
import { Footer } from '../components/Footer';
import { HeroSection } from '../components/HeroSection';
import { InfoSection } from '../components/InfoSection';
import { homeObjOne, homeObjThree, homeObjTwo } from '../components/InfoSection/Data';
import { Navbar } from '../components/Navbar'
import { Services } from '../components/Services';
import { Sidebar } from '../components/Sidebar'

export const Home = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    const handleToggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
          <Sidebar isOpen = {isOpen} toggle = {handleToggle}/>
          <Navbar toggle = {handleToggle}/> 
          <HeroSection/> 
          <InfoSection {...homeObjOne}/>
          <InfoSection {...homeObjTwo}/>
          <Services/>
          <InfoSection {...homeObjThree}/>
          <Footer/>
        </>
    )
}
