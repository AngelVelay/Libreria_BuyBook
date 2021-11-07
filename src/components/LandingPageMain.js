import React from 'react'
import Library from '../media/Library.mp4'
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Logo from '../media/logo_large.png'
import styled from 'styled-components'


const LandingPageMain = () => {
    return (
<>
        <Navbar/>

        <Container>
            <Video src={Library} autoPlay={true} loop={true} muted={true}/>

            <img src={Logo} alt="#" />
            <h1>Libreria BuyBook</h1>
            
            <Link to="/books" 
            style={{ color: 'white', textDecoration: 'underline' }}>
            Entra para ver todos los titulos que tenemos para tí  </Link>
        </Container>
    </>

    )
}

const Container = styled.div`
    height:100vh;
    width: 100%;
    object-fit: cover;
    box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.8);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
        color: white;
        font-size: 100px;
    }

    a {
        color: white;
        font-size: 20px;
        text-decoration: none;
    }

    img {
        height: 200px;
        width: 200px;
    }

   `

const Video = styled.video`
    object-fit: cover;
    width: 100%;
    height: 100vh;
    position: absolute;
    z-index: -1;
`

export default LandingPageMain
