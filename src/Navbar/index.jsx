import React from 'react'
import MyImg from '../Assets/Images/myImg.jpg';
import { Navbarimg, NavbarWrapper, NavbarWrapper1 } from './style';

function Navbar() {
    return (
        <NavbarWrapper>
            <div>
                <input type="text" placeholder="Search Products" style={{color:"black"}}/>
                <i class="fas fa-search" style={{marginLeft:"-25px",color:"lightgrey"}}></i>
            </div>
            <NavbarWrapper1>
                <div><i class="fas fa-bell" style={{color:"grey"}}></i></div>
                <Navbarimg src={MyImg} alt="myImage" />
                <p>dilovar bobokulov</p>
            </NavbarWrapper1>
        </NavbarWrapper>
    )
}

export default Navbar;
