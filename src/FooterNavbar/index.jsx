import React from 'react'
import Footer from '../Footer'
import Navbar from '../Navbar'
import { FooterNavbarWrapper } from './style'

function FooterNavbar() {
    return (
        <FooterNavbarWrapper>
            <Footer />
            <Navbar />
        </FooterNavbarWrapper>
    )
}

export default FooterNavbar
