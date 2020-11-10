import React from "react";
import { Navbar, Nav, Button, Image, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Filter from "./Filter";

class Navigation extends React.Component {
    constructor() {
        super();
        this.state = {
            isMenuOpen: false,
            address: "96 Marlow Bottom, SL7 3PH",
            email: "caley@skinrevivalspecialist.co.uk",
            number: "077976 962012"
        };
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
            <>
                <Filter className={this.state.isMenuOpen ? "d-block" : "d-none"} />
                <div className={`nav-menu d-block d-xl-none ${isOpen}`}>
                    <Nav className="py-3 d-flex flex-column align-items-center justify-content-center">
                        <Link to={{
                            pathname: '/about',
                            state: { modal: true, type: "about" }
                        }}>About</Link>
                        <Nav.Link onClick={this.toggleMenu} href="#treatments">Treatments</Nav.Link>
                        <Nav.Link onClick={this.toggleMenu} href="#testimonials">Testimonials</Nav.Link>
                    </Nav>
                </div>
                <Navbar variant="dark" id="navbar" className="d-flex justify-content-center">
                    <div className="nav__menu-btn d-none d-md-block d-xl-none">
                        <Button onClick={this.toggleMenu} variant="outline-light" className="menu-btn"><i className="fas fa-bars"></i></Button>
                    </div>
                    <Col xl={4} className="d-none d-xl-block">
                        <Nav className="nav-section">
                            <Link to={{
                                pathname: '/about',
                                state: { modal: true, type: "about" }
                            }}>About</Link>
                            <Nav.Link href="#treatments">Treatments</Nav.Link>
                            <Nav.Link href="#testimonials">Testimonials</Nav.Link>
                        </Nav>
                    </Col>
                    <Col sm={9} lg={6} xl={4} className="logo">
                        <Navbar.Brand href="#home" className="m-0">
                            <Image
                                src={require("./images/logo-alt_fff.png")}
                                className="d-inline-block align-top my-3"
                                alt="Caley Mansfield Skin Revival logo"
                                fluid
                            />
                        </Navbar.Brand>
                    </Col>
                    <Col xl={4} className="d-none d-xl-block">
                        <Nav className="flex-column">
                            <Nav.Link href="https://www.google.com/maps/place/96+Marlow+Bottom,+Marlow+SL7+3PH/" target="_blank"><i className="fas fa-map-marker-alt"></i>{this.state.address}</Nav.Link>
                            <Nav.Link href={`mailto:${this.state.address}`}><i className="far fa-envelope"></i>{this.state.email}</Nav.Link>
                            <Nav.Link href={`tel:${this.state.number}`}><i className="fas fa-phone-alt"></i>{this.state.number}</Nav.Link>
                        </Nav>
                    </Col>
                </Navbar >

            </>
        )
    }
}

export default Navigation;