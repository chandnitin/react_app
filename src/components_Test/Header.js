import React from 'react'
import {  Navbar,NavDropdown,NavLink,Nav} from 'react-bootstrap';
export default function Header() {
    return (
        <>        
                <Navbar collapseOnSelect expand="xl" bg="dark" variant="dark">
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                        </Nav>
                        <Nav>                            
                        <Nav.Link eventKey={2} href="#memes" className="mr-1">
                            <NavDropdown title="Nitin Chandekar" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.2">Logout</NavDropdown.Item>                                                                
                            </NavDropdown>
                        </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>            
        </>
    )
}
