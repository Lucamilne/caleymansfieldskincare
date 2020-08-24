import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import Filter from "./Filter"

class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isMenuOpen: false};
    
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
                <Filter className={this.state.isMenuOpen ? "d-block" : "d-none"}/>
                <div className={`nav__menu d-block d-lg-none ${isOpen}`}>
                    <Nav className="d-flex flex-column align-items-center justify-content-center">
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#treatments">Treatments</Nav.Link>
                        <Nav.Link href="#testimonials">Testimonials</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav>
                </div>
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
                            <Nav.Link><i className="fas fa-map-marker-alt"></i>96 Marlow Bottom, SL7 3PH</Nav.Link>
                            <Nav.Link><i className="far fa-envelope"></i>caleymansfield@icloud.com</Nav.Link>
                            <Nav.Link><i className="fas fa-phone-alt"></i>(0) 7976 962012</Nav.Link>
                        </Nav>
                    </div>

                    <div className="nav__menu-btn d-block d-lg-none">
                        <Button onClick={this.toggleMenu} variant="outline-light" className="menu-btn"><i className="fas fa-bars"></i></Button>
                    </div>
                </Navbar >
            </div>
        )
    }
}

export default Navigation;