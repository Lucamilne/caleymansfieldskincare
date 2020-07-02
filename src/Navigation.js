import React from "react";
import { Container, Dropdown, Button } from "react-bootstrap";

class Navigation extends React.Component {
    render() {
        return (

            <nav className="position-absolute">
                <Container fluid className="nav__content d-flex justify-content-between">
                    <Dropdown className="nav__item">
                        <Dropdown.Toggle variant="primary" className="btn btn-outline-light hollow" id="dropdown-basic">
                            Furniture
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <h1>Kitchenism.</h1>
                </Container>
            </nav>
        )
    }
}

export default Navigation;