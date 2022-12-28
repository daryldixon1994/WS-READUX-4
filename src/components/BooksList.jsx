import React, { useState } from "react";
import "./style.css";
import { Button, Modal, Form } from "react-bootstrap";
import BookCard from "./BookCard";
import { useSelector, useDispatch } from "react-redux";
import { addNewBook } from "../redux/actions";
function BooksList({}) {
    const dispatch = useDispatch();
    const books = useSelector((store) => store.booksReducer.books);
    const search = useSelector((store) => store.booksReducer.search);
    const rating = useSelector((store) => store.booksReducer.rate);
    console.log("books", books);
    const [show, setShow] = useState(false);
    const [newBook, setNewBook] = useState({});
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleChange = (e) => {
        setNewBook({
            ...newBook,
            [e.target.name]: e.target.value,
            id: "dhHgQQSae",
        });
    };
    const handleSave = () => {
        dispatch(addNewBook(newBook));
        handleClose();
    };
    return (
        <div className="books-list-container">
            <h1>Books List</h1>

            <Button variant="primary" onClick={handleShow}>
                Add a book
            </Button>

            <div className="books-items">
                {books
                    ?.filter((elt) =>
                        elt.title.toLowerCase().includes(search.toLowerCase())
                    )
                    .filter((elt) => (rating ? elt.rate == rating : elt))
                    .map((book) => (
                        <BookCard key={book.id} {...book} />
                    ))}
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add a new book</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onChange={(e) => handleChange(e)}>
                        <Form.Group className="mb-3">
                            <Form.Label>Book title</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="add the title of the book"
                                name="title"
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Author</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="add the author's name"
                                name="author"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Books's image</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="add the image url"
                                name="img"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Books's rating</Form.Label>
                            <Form.Control
                                type="number"
                                min={1}
                                max={10}
                                name="rate"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Books's price</Form.Label>
                            <Form.Control
                                type="number"
                                min={10}
                                max={200}
                                name="price"
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button
                        variant="primary"
                        type="button"
                        onClick={handleSave}
                    >
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default BooksList;
