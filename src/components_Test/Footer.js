import React from 'react'
import {  Navbar,Container,NavbarBrand} from 'react-bootstrap';
export default function Footer() {
    return (
        <div className="fixed-bottom " >  
        <Navbar color="dark" bg="dark" variant="dark" >
            <Container className="justify-content-md-center" >
                <NavbarBrand > <p>@copy right @ Nitt's S. Chand</p> </NavbarBrand>
            </Container>
        </Navbar>
        </div>
    )
}

