import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import './StarWarsFont.css';

function NavigationBar () {
    return(
        <>
        <div className="attributes">
        <Navbar expand="lg" variant="dark" bg="dark" fixed="top">
            <Navbar.Brand href="/home">Jeremy Wars</Navbar.Brand>
            <Nav className="ml-auto">
                <Nav.Link href="/home">Characters</Nav.Link>
                <Nav.Link href="/planet">Planets</Nav.Link>
                <Nav.Link href="/vehicle">Vehicles</Nav.Link>
                <Nav.Link href="/species">Species</Nav.Link>
            </Nav>
        </Navbar>
        </div>
        </>
    );
};

export default NavigationBar;