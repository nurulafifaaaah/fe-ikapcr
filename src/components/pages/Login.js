import React, { Component } from 'react';
import { Container, Row, Col, Image, Form, Button, Nav } from 'react-bootstrap';
import LoginImage from '../assets/images/login.png'

class Login extends Component {
    render() {
        return (
            <>
                <Container style={{ padding: 30 }}>
                    <div className='MainTitle'>
                        <h1><strong>Login</strong></h1>
                    </div>
                    <Row>
                        <Col sm>
                            <Form>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        style={{ borderRadius: 50, height: 40 }}
                                        type="email"
                                        placeholder="name@example.com" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formPlaintextPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        style={{ borderRadius: 50, height: 40 }}
                                        type="password"
                                        placeholder="your password" />
                                </Form.Group>
                            </Form>
                            <Button style={{ borderRadius: 50, background: '#195C92', fontFamily: 'Poppins', width: '100%', height: 40 }}>
                                Daftar
                            </Button>
                            <div style={{ paddingTop: 30, paddingLeft: 15 }}>
                                <Row >
                                    <Col sm={4}>Belum punya akun?</Col>
                                    <Col><Nav.Link>
                                        Klik Disini</Nav.Link></Col>
                                </Row>
                            </div>

                        </Col>
                        <Col sm >
                            <div style={{ marginTop: -100 }}>
                                <Image src={LoginImage} style={{ width: '100%' }}></Image>
                            </div>
                        </Col>
                    </Row>
                </Container>

            </>
        );
    }
}

export default Login;