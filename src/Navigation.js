import React from "react";
import { Navbar, Nav, Button, Image, Col } from "react-bootstrap";
import Filter from "./Filter"

class Navigation extends React.Component {
    constructor() {
        super();
        this.state = {
            isMenuOpen: false,
            address: "96 Marlow Bottom, SL7 3PH",
            email: "caleymansfield@icloud.com",
            number: "077976 962012"
        };

        // This binding is necessary to make `this` work in the callback
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu() {
        this.setState(state => ({
            isMenuOpen: !state.isMenuOpen
        }));
    }

    render() {
        let isOpen = this.state.isMenuOpen ? 'open' : '';

        return (
            <div>
                <Filter className={this.state.isMenuOpen ? "d-block" : "d-none"} />

                <div className={`nav__menu d-block d-lg-none ${isOpen}`}>
                    <Nav className="py-3 d-flex flex-column align-items-center justify-content-center">
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#treatments">Treatments</Nav.Link>
                        <Nav.Link href="#testimonials">Testimonials</Nav.Link>
                    </Nav>
                </div>

                <Navbar variant="dark" id="navbar" className="d-flex justify-content-between">
                    <Col>
                        <div className="d-none d-lg-block nav__section">
                            <Nav className="nav__section">
                                <Nav.Link href="#about">About</Nav.Link>
                                <Nav.Link href="#treatments">Treatments</Nav.Link>
                                <Nav.Link href="#testimonials">Testimonials</Nav.Link>
                            </Nav>
                        </div>
                    </Col>
                    <Col md={6} lg={4}>
                        <Navbar.Brand href="#home" className="nav__section d-flex justify-content-center">
                            <Image
                                src={require("./images/logo_fff.png")}
                                className="d-inline-block align-top"
                                alt="Caley Mansfield Skin Revival logo"
                                fluid
                            />
                        </Navbar.Brand>
                    </Col>
                    <Col>
                        <div className="d-none d-lg-block nav__section">
                            <Nav className="flex-column">
                                <Nav.Link href="https://www.google.com/maps/place/96+Marlow+Bottom,+Marlow+SL7+3PH/" target="_blank"><i className="fas fa-map-marker-alt"></i>{this.state.address}</Nav.Link>
                                <Nav.Link href={`mailto:${this.state.address}`}><i className="far fa-envelope"></i>{this.state.email}</Nav.Link>
                                <Nav.Link href={`tel:${this.state.number}`}><i className="fas fa-phone-alt"></i>{this.state.number}</Nav.Link>
                            </Nav>
                        </div>
                    </Col>
                    <div className="nav__menu-btn d-block d-lg-none">
                        <Button onClick={this.toggleMenu} variant="outline-light" className="menu-btn"><i className="fas fa-bars"></i></Button>
                    </div>
                </Navbar >

            </div>
        )
    }
}

export default Navigation;