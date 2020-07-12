import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";

class Navigation extends React.Component {
    render() {
        return (
            <Navbar variant="dark" id="navbar" className="d-flex justify-content-between">
                <div className="d-none d-lg-block nav__section">
                    <Nav className="nav__section">
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#treatments">Treatments</Nav.Link>
                        <Nav.Link href="#testimonials">Testimonials</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav>
                </div>

                <Navbar.Brand href="#home" className="nav__section d-flex justify-content-center">
                    <img
                        src={require("./images/logo_fff.png")}
                        width="300"
                        height="123"
                        className="d-inline-block align-top"
                        alt="Caley Mansfield Skin Revival logo"
                    />
                </Navbar.Brand>

                <div className="d-none d-lg-block nav__section">
                    <Nav className="flex-column">
                        <Nav.Link><i className="fas fa-map-marker-alt"></i>12 Business Address, SL8 1AN</Nav.Link>
                        <Nav.Link><i className="far fa-envelope"></i>email@businesshost.com</Nav.Link>
                        <Nav.Link><i className="fas fa-phone-alt"></i>+44 7976 962012</Nav.Link>
                    </Nav>
                </div>

                <div className="d-block d-lg-none">
                    <Button variant="outline-light" className="menu-btn"><i className="fas fa-bars"></i></Button>
                </div>
            </Navbar >
        )
    }
}

export default Navigation;