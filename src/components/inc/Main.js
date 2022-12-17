import '../assets/css/landingPage.css';
import React, { Component } from 'react';
import { Nav, Container, Row, Col, Card, Table, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaInstagram, FaLinkedin, FaFacebookF, FaRegCalendarAlt, FaRegClock, FaLocationArrow } from 'react-icons/fa';
import BeritaImage from '../assets/images/Berita1.jpg';
import KAImage from '../assets/images/kisahalumni.png';
import AgendaImage from '../assets/images/agenda.jpg';
import BubbleImage from '../assets/images/Bubble.png';

class Main extends Component {
    render() {
        return (
            <div style={{ backgroundColor: '#ffffff' }} className="animate__animated animate__fadeInUpBig">
                {/* Berita Section */}
                <Container>
                    <h1 className='tittleH1'>
                        Berita
                    </h1>
                    <div className='pLihatSemua' style={{ padding: 10 }}>
                        <Nav.Link href="berita"> Lihat Semua </Nav.Link>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <Row>
                            <Col sm>
                                <div className='Card'>
                                    <Card>
                                        <Card.Img src={BeritaImage} style={{ padding: 10 }} />
                                        <Card.Body>
                                            <div style={{ marginTop: -20, marginBottom: 10 }} >
                                                <small className="text-muted" >19 Januari 2022</small>
                                            </div>
                                            <div className='cardTittle'>
                                                <Card.Title>Pelantikan Ketua Ikapcr</Card.Title>
                                            </div>
                                            <div>
                                                <Card.Text className='cardText'>
                                                    Di usia ke-20 tahun, Politeknik Caltex Riau (PCR) akan senantiasa
                                                    menjadi kampus yang lebih tangguh ..
                                                </Card.Text>
                                                <div className='pLihatSemua'>
                                                    <Card.Link href="#">Baca Selengkapnya</Card.Link>
                                                </div>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </Col>
                            <Col sm>
                                <div className='Card'>
                                    <Card>
                                        <Card.Img src={BeritaImage} style={{ padding: 10 }} />
                                        <Card.Body>
                                            <div style={{ marginTop: -20, marginBottom: 10 }} >
                                                <small className="text-muted" >19 Januari 2022</small>
                                            </div>
                                            <div className='cardTittle'>
                                                <Card.Title>Pelantikan Ketua Ikapcr</Card.Title>
                                            </div>
                                            <div>
                                                <Card.Text className='cardText'>
                                                    Di usia ke-20 tahun, Politeknik Caltex Riau (PCR) akan senantiasa
                                                    menjadi kampus yang lebih tangguh ..
                                                </Card.Text>
                                                <div className='pLihatSemua'>
                                                    <Card.Link href="#">Baca Selengkapnya</Card.Link>
                                                </div>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </Col>
                            <Col sm>
                                <div className='Card'>
                                    <Card>
                                        <Card.Img src={BeritaImage} style={{ padding: 10 }} />
                                        <Card.Body>
                                            <div style={{ marginTop: -20, marginBottom: 10 }} >
                                                <small className="text-muted" >19 Januari 2022</small>
                                            </div>
                                            <div className='cardTittle'>
                                                <Card.Title>Pelantikan Ketua Ikapcr</Card.Title>
                                            </div>
                                            <div>
                                                <Card.Text className='cardText'>
                                                    Di usia ke-20 tahun, Politeknik Caltex Riau (PCR) akan senantiasa
                                                    menjadi kampus yang lebih tangguh ..
                                                </Card.Text>
                                                <div className='pLihatSemua'>
                                                    <Card.Link href="#">Baca Selengkapnya</Card.Link>
                                                </div>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </Col>
                        </Row>
                    </div>

                </Container>

                {/* Kisah Alumni Section */}
                {/* <div>
                    <Image src={BubbleImage}></Image> */}{/* </div> */}
                <Container>
                    <h1 className='tittleH1'>
                        Kisah Alumni
                    </h1>
                    <div className='pLihatSemua' style={{ padding: 10 }}>
                        <Nav.Link href="kisahalumni"> Lihat Semua </Nav.Link>
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



                {/* Agenda Section */}
                <Container style={{paddingBottom:30}}>
                    <h1 className='tittleH1'>
                        Agenda
                    </h1>
                    <div className='pLihatSemua' style={{ padding: 10 }}>
                        <Nav.Link href="agenda"> Lihat Semua </Nav.Link>
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
                                                        <td style={{ width: 15}}>
                                                            <div>
                                                                <FaRegCalendarAlt />
                                                                </div>
                                                            </td>
                                                        <td>20 Januri 2022</td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ width: 15 }}><div><FaRegClock/></div></td>
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
                                                        <td style={{ width: 15}}>
                                                            <div>
                                                                <FaRegCalendarAlt />
                                                                </div>
                                                            </td>
                                                        <td>20 Januri 2022</td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ width: 15 }}><div><FaRegClock/></div></td>
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
                                                        <td style={{ width: 15}}>
                                                            <div>
                                                                <FaRegCalendarAlt />
                                                                </div>
                                                            </td>
                                                        <td>20 Januri 2022</td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ width: 15 }}><div><FaRegClock/></div></td>
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

export default Main;