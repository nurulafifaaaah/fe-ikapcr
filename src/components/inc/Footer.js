import React, { Component } from 'react';
import { Col, Row, Container, Image, Nav, Navbar } from 'react-bootstrap';
import PlaystoreImage from "../assets/images/playstore.png"
import LogoFooterImage from "../assets/images/logofooter.png"

class Footer extends Component {
    render() {
        return (
            
            <div style={{ backgroundColor: '#195C92', paddingTop: '50px', color:'#ffffff' }}>
                <Container>
                    <Row style={{ paddingTop: 30 }}>
                        <Col sm>
                            <div><Image src={LogoFooterImage}></Image></div>
                            <div style={{ marginTop: 30 }}>
                                <h6>Sekretariat IKAPCR</h6>
                                <p>Jl. Umban Sari (Patin) No. 1 Rumbai <br />
                                    Pekanbaru-Riau 28265 <br />
                                    Telp : (0761) - cxxxxxx</p>
                            </div>
                            <Row style={{ marginTop: -10 }}>
                                <Col xs={6}>ikapcr@ikapcr.ac.id</Col>
                                <Col xs={6}>+62 9092 1920</Col>
                            </Row>
                        </Col>
                        <Col sm style={{ marginTop: 20 }}>
                            <h6>Halaman</h6>
                            <Nav.Link href="/">Beranda</Nav.Link>
                            <Nav.Link href="/">Galeri</Nav.Link>
                            <Nav.Link href="/">Tentang Alumni</Nav.Link>
                        </Col>
                        <Col sm style={{ marginTop: 20 }}>
                            <div><h3>Find Us At!</h3></div>
                            <div style={{ marginLeft: -10, marginTop:-10 }}>
                                <Nav.Link href="https://play.google.com/store/apps/details?id=ikapcr.awpmedia.android">
                                    <Navbar.Brand >
                                        <img src={PlaystoreImage} />
                                    </Navbar.Brand>
                                </Nav.Link></div>
                        </Col>
                        <div style={{textAlign:'center', paddingTop:15 , paddingBottom:30}}>
                            © IKAPCR 2022 - All right reserved.
                            </div>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Footer;