import React, { Component } from 'react';
import '../../assets/css/landingPage.css';
import { Nav, Container, Row, Col, Card, Table, Image, Button } from 'react-bootstrap';
import UsahaImage from '../../assets/images/usahaalumni.png';


class UsahaAlumni extends Component {
    render() {
        return (
            <div>
             <Container style={{ padding: 30 }}>
                    <div className='MainTitle'>
                        <h1><strong>Usaha Alumni</strong></h1>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <Row>
                            <Col sm>
                                <div className='Card'>
                                    <Card>
                                        <Card.Img src={UsahaImage} style={{ padding: 10 }} />
                                        <Card.Body>
                                            <div style={{ marginTop: -20, marginBottom: 10 }} >
                                                <small className="text-muted" >Nurul Afifah</small>
                                            </div>
                                            <div className='cardTittle'>
                                                <Card.Title>Pisang Coklat Keju</Card.Title>
                                            </div>
                                            <div>
                                                <Button style={{borderRadius:41, background:'#195C92'}}>Lihat</Button>
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

export default UsahaAlumni;