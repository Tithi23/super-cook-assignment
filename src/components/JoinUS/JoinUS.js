import React from 'react';
import { Col, Container, Form, Row, Button } from 'react-bootstrap';
import './JoinUs.css'
const JoinUS = () => {
    return (
        <div className="join-part">

            <Container>

                <div className="text-center"> <h1 className="section-heading">Send Deatils  <span className="special-text">We Will Contact You</span></h1></div>

                <Form className="main-form">
                    <Row className="mb-5">
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>


                    </Row>

                    <Form.Group className="mb-3" controlId="formGridAddress1">
                        <Form.Label>Address</Form.Label>
                        <Form.Control placeholder="Address" />
                    </Form.Group>


                    <Row className="mb-3">


                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>Chose Which Special Shep You Want To Be..  </Form.Label>
                            <Form.Select defaultValue="Choose...">
                                <option>Select shep </option>
                                <option>Fish Chef (Poissonier)</option>
                                <option>Vegetable Chef (Entremetier)</option>
                                <option>Meat Chef (Rotisseur, Roast Chef)</option>
                                <option>Pantry Chef (Garde Manger)</option>
                                <option>Fry Chef (Friturier)</option>
                                <option>Grill Chef (Grillardin)</option>

                            </Form.Select>
                        </Form.Group>

                    </Row>






                    <Row className="mb-2">


                        <Form.Group controlId="formFileSm" className="mb-3">
                            <Form.Label>Select Image Of Student</Form.Label>
                            <Form.Control type="file" size="sm" />
                        </Form.Group>
                        <Form.Group className="mb-3" id="formGridCheckbox">
                            <Form.Check type="checkbox" label="agreed with terms & condition" />
                        </Form.Group>
                    </Row>



                    <Button className="details-btn" variant="primary" type="submit">
                        Submit
                    </Button>

                </Form>
                <br />

            </Container>

        </div>
    );
};

export default JoinUS;