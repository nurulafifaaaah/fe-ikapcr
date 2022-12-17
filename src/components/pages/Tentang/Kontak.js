import React, { Component } from 'react';
import { Container, Row, Col, Form, Image, Button } from 'react-bootstrap';
import KontakImage from "../../assets/images/kontak.png"

class Kontak extends Component {
    render() {
        return (
            <div>
                <Container style={{ padding: 30 }}>
                    <div className='MainTitle'>
                        <h1><strong>Kontak Kami</strong></h1>
                    </div>
                    <Row>
                        <Col sm >
                            <div >
                                <Image src={KontakImage} style={{ width: '100%' }}></Image>
                            </div>
                        </Col>
                        <Col sm>
                            <div style={{ background: '#F4F6FC', borderRadius: 12, width: '100%' }}>
                                <div style={{ padding: 20 }}>
                                    <Form>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label>Name</Form.Label>
                                            <Form.Control
                                                style={{ borderRadius: 10, height: 40 }}
                                                type="email"
                                                placeholder="Alexa" />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label>Email</Form.Label>
                                            <Form.Control
                                                style={{ borderRadius: 10, height: 40 }}
                                                type="email"
                                                placeholder="name@example.com" />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                            <Form.Label>Message</Form.Label>
                                            <Form.Control
                                                style={{ borderRadius: 10 }}
                                                as="textarea"
                                                rows={3}
                                                placeholder="write your message here.." />
                                        </Form.Group>
                                    </Form>
                                    <Button style={{ borderRadius: 50, background: '#195C92', fontFamily: 'Poppins', height: 40 }}>
                                        Kirim
                                    </Button></div>
                            </div>

                        </Col>

                    </Row>
                </Container>
            </div>
        );
    }
}

export default Kontak;