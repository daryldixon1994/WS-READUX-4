import React, { useState } from "react";
import { Button, Card, Modal, Form } from "react-bootstrap";
import { editTitle } from "../redux/actions";
import { useDispatch } from "react-redux";
function BookCard({ title, author, img, rate, price, id }) {
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const [newTitle, setNewTilte] = useState("");
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleChange = (e) => {
        setNewTilte(e.target.value);
    };
    const handleSave = () => {
        dispatch(editTitle({ newTitle, id }));
        handleClose();
    };
    return (
        <Card style={{ width: "18rem" }}>
            <Card.Img
                variant="top"
                src={img}
                style={{
                    width: "100%",
                    height: "428px",
                    objectFit: "cover",
                }}
            />
            <Card.Body
                style={{
                    height: "300px",
                }}
            >
                <Card.Header>{author}</Card.Header>
                <Card.Title>{title}</Card.Title>
                <br />
                <Card.Subtitle>Price : {price} </Card.Subtitle>
                <Card.Subtitle>Rate : {rate} </Card.Subtitle>
                <br />
                <Button variant="primary">Details</Button>
                <Button variant="outline-secondary" onClick={handleShow}>
                    Edit title
                </Button>{" "}
            </Card.Body>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                    >
                        <Form.Label>New Title</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="name@example.com"
                            onChange={(e) => {
                                handleChange(e);
                            }}
                        />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button
                        variant="primary"
                        onClick={() => {
                            handleSave();
                        }}
                    >
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </Card>
    );
}

export default BookCard;
