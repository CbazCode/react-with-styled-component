import React, { useState } from 'react'
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarLink,
    SidebarRoute,
    SideBtnWrap,
    SidebarMenu
    
} from './SidebarElements'

export const Sidebar = () => {

    const [isOpen, setIsOpen] = useState(false)

    const handleToggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <SidebarContainer isOpen = {isOpen}>
            <Icon>
                <CloseIcon onClick = {handleToggle}/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to = "about">About</SidebarLink>
                    <SidebarLink to = "discover">Discover</SidebarLink>
                    <SidebarLink to = "services">Services</SidebarLink>
                    <SidebarLink to = "signup">Sign Up</SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to = '/signin'>Sign In</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}
