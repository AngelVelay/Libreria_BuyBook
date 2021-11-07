import React from 'react'
import styled from 'styled-components'
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';




const Navbar = () => {
    return (
        <NavbarContainer>
            <Logo><h1>BuyBook</h1></Logo>
                <Button 
                color="primary" >
                <Link to="/books" style={{ color: 'white', textDecoration: 'inherit' ,fontSize: '20px'  }}>
                    Tienda
                </Link>
            </Button>
        </NavbarContainer>
    )
}

const NavbarContainer = styled.div`
    position: absolute;
    top: 0;
    background-color:transparent;
    width: 100%;
    height: 80px;
    padding-left: 50px;
    font-size:20px;
    z-index:1;
    display: flex;
    align-items: baseline;
    justify-content:space-evenly
`
const Logo = styled.div`
    height:80px;
    line-height:80px;
    color:white;
    cursor: pointer;
`

export default Navbar
