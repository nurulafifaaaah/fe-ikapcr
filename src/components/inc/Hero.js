import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import { Row, Col, Button } from 'react-bootstrap';
import HeroImage from '../assets/images/hero.png';
import '../assets/css/landingPage.css';
import 'animate.css'


class Hero extends Component {
    render() {
        return (
            <div style={{backgroundColor:'#ffffff'}}>
            <Container style={{paddingTop:80}}>
                <Row >
                    <Col sm={6} style={{paddingTop:40}} className="animate__animated animate__fadeInUpBig">
                        <p className='tittleHero'>Ikatan Alumni<br></br>
                        Politeknik Caltex Riau</p>
                        <h5 className='subTittleHero'>
                        Cara mudah agar saling terhubung antara <br></br>
                        sesama alumni Politeknik Caltex Riau
                        </h5>
                        <Button className='ButtonHero' style={{borderRadius:50, background:'#195C92', fontFamily:'Poppins'}}>
                            Daftar
                        </Button>
                    </Col>
                    <Col sm={6} style={{paddingTop:40}} className="animate__animated animate__fadeIn">
                        <img src={HeroImage} style={{width:'100%'}}></img>
                    </Col>
                </Row>
            </Container>
            </div>
        );
    }
}

export default Hero;