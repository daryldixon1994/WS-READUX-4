import React from "react";
import ReactStars from "react-rating-stars-component";
import {
    Container,
    Nav,
    Navbar,
    NavDropdown,
    Form,
    Button,
} from "react-bootstrap";
import { searching } from "../redux/actions";
import { rating } from "../redux/actions";
import { useDispatch } from "react-redux";
function NavBar() {
    const dispatch = useDispatch();
    const ratingChanged = (newRating) => {
        dispatch(rating(newRating));
    };
    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#">Home of books</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: "100px" }}
                        navbarScroll
                    >
                        <Nav.Link href="#action1">Home</Nav.Link>
                        <ReactStars
                            count={10}
                            onChange={ratingChanged}
                            size={24}
                            activeColor="#ffd700"
                        />
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                            onChange={(event) => {
                                dispatch(searching(event.target.value));
                            }}
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;
