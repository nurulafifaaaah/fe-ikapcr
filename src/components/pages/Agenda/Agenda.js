import React, { Component } from 'react';
import { Nav, Container, Row, Col, Card, Table, Image } from 'react-bootstrap';
import { FaInstagram, FaLinkedin, FaFacebookF, FaRegCalendarAlt, FaRegClock, FaLocationArrow } from 'react-icons/fa';
import AgendaImage from '../../assets/images/agenda.jpg';

class Agenda extends Component {
    render() {
        return (
            <div>
                <Container style={{ padding: 30 }}>
                    <div className='MainTitle'>
                        <h1><strong>Agenda</strong></h1>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <Row>
                            <Col sm>
                                <div className='Card'>
                                    <Card>
                                        <Card.Img src={AgendaImage} style={{ padding: 10 }} />
                                        <Card.Body>
                                            <div style={{ marginTop: -20, marginBottom: 10 }} >
                                                <small className="text-muted" >19 Januari 2022</small>
                                            </div>
                                            <div className='cardTittle'>
                                                <Card.Title>Sajak 2022</Card.Title>
                                            </div>
                                            <div>
                                                <Table >
                                                    <tr>
                                                        <td style={{ width: 15 }}>
                                                            <div>
                                                                <FaRegCalendarAlt />
                                                            </div>
                                                        </td>
                                                        <td>20 Januri 2022</td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ width: 15 }}><div><FaRegClock /></div></td>
                                                        <td>14.00</td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ width: 15 }}><div><FaLocationArrow /></div></td>
                                                        <td>Kesektariatan</td>
                                                    </tr>
                                                </Table>
                                            </div>

                                            <div className='pLihatSemua'>
                                                <Card.Link href="#">Detail</Card.Link>
                                            </div>

                                        </Card.Body>
                                    </Card>
                                </div>
                            </Col>
                        </Row>
                    </div>

                </Container>
            </div>
        );
    }
}

export default Agenda;