import React from 'react'
import Card from './Card'
import styled from 'styled-components'
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import Logo from '../media/logo_large.png'






const Books = ({books}) => {
    return (
    <>

        <Button >
            <Link to="/" >
                <img src={Logo} alt="#" style={{ width: '180px', height: '180px'}}/>
            </Link>
        </Button>

    <Container >
        <Book>
            {books.map(book => (
                <Card book={book} key={book.title}/> 
            ))}
        </Book>
    </Container>    
    </>
    )
}


const Container = styled.div`
        
   `

const Book = styled.div`
    margin: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-content: space-evenly;
    row-gap: 40px;
`

export default Books
