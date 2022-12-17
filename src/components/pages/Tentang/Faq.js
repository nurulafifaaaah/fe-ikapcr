import React, { Component } from 'react';
import { Container, Row, Col, Image, Accordion } from 'react-bootstrap';
import FaqImage from "../../assets/images/FAQ.png"

class Faq extends Component {
    render() {
        return (
            <div>
                <Container style={{ padding: 30 }}>
                    <div className='MainTitle'>
                        <h1><strong>Frequently Asked Questions</strong></h1>
                    </div>
                    <Row>
                        <Col sm><Image src={FaqImage} style={{ width: '100%' }}></Image>
                        </Col>
                        <Col sm>
                            <Accordion flush >
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Siapa Saja Anggota IKAPCR?</Accordion.Header>
                                    <Accordion.Body>
                                        Jawaban 1
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>Bagaimana Cara Menjadi Pengurus IKAPCR?</Accordion.Header>
                                    <Accordion.Body>
                                        Jawaban 2
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>Bagaimana Cara Menjadi Anggota IKAPCR? </Accordion.Header>
                                    <Accordion.Body>
                                        Jawaban 3
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </Col>

                    </Row>
                </Container>
            </div>
        );
    }
}

export default Faq;