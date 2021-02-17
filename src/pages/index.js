import React, { useState } from 'react'
import { HeroSection } from '../components/HeroSection';
import { InfoSection } from '../components/InfoSection';
import { Navbar } from '../components/Navbar'
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
          <InfoSection/>
        </>
    )
}
