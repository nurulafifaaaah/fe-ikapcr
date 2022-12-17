import '../../assets/css/landingPage.css';
import React, { Component } from 'react';
import { Nav, Container, Row, Col, Card, Table, Image } from 'react-bootstrap';
import { FaInstagram, FaLinkedin, FaFacebookF } from 'react-icons/fa';
import KAImage from '../../assets/images/kisahalumni.png';


class KisahAlumni extends Component {
    render() {
        return (
            <div>
                 <Container style={{ padding: 30 }}>
            <div className='MainTitle'>
                <h1><strong>Kisah Alumni</strong></h1>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <Row>
                            <Col sm>
                                <div className='CardKA'>
                                    <Card>
                                        <Image roundedCircle src={KAImage} style={{ padding: 38, height: 250 }} />
                                        <Card.Body>
                                            <div className='KAprodi' style={{ marginTop: -30 }} >
                                                <small> Sistem Infomasi</small>
                                            </div>
                                            <div className='cardTittleKA'>
                                                <h5>Rexa Alexa</h5>
                                            </div>
                                            <div>
                                                <Card.Text className='cardTextKA'>
                                                    Di usia ke-20 tahun, Politeknik Caltex Riau (PCR) akan senantiasa
                                                    menjadi kampus yang lebih tangguh ..
                                                </Card.Text>
                                                <div className='IconsKA'>
                                                    <Row>
                                                        <Col><FaInstagram /></Col>
                                                        <Col><FaLinkedin /></Col>
                                                        <Col><FaFacebookF /></Col>
                                                    </Row>
                                                </div>
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

export default KisahAlumni;