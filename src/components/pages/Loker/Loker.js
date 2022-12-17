import React, { Component } from 'react';
import '../../assets/css/landingPage.css';
import { Nav, Container, Row, Col, Card, Table, Image, Button } from 'react-bootstrap';
import LokerImage from '../../assets/images/loker.png';



class Loker extends Component {
    render() {
        return (
            <div>
                 <Container style={{ padding: 30 }}>
            <div className='MainTitle'>
                <h1><strong>Loker</strong></h1>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <Row>
                            <Col sm>
                                <div className='Card'>
                                    <Card>
                                        <Card.Img src={LokerImage} style={{ padding: 10 }} />
                                        <Card.Body>
                                            <div style={{ marginTop: -20, marginBottom: 10 }} >
                                                <small className="text-muted" >Nurul Afifah</small>
                                            </div>
                                            <div className='cardTittle'>
                                                <Card.Title>Admin Support</Card.Title>
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

export default Loker;