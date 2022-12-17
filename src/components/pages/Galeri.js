import React, { Component, useState } from 'react';
import { Container, Image, Col, Row, Card, Modal, Button } from 'react-bootstrap';
import Lightbox from 'react-image-lightbox';
import "react-image-lightbox/style.css";
import BeritaImage from "../assets/images/Berita1.jpg"
import Berita2Image from "../assets/images/Berita2.jpg"

function Galeri() {

    return (
        <div>
            <Container style={{ padding: 30 }}>
                <div className='MainTitle'>
                    <h1><strong>Galeri</strong></h1>
                </div>
                <Row>
                    <Col>
                        <Card>
                            <div style={{ padding: 15 }}>
                                <Card.Img src={BeritaImage} style={{ borderRadius: 0 }}></Card.Img>
                                <div style={{ color: '#091156', textAlign: 'center', margin: 10, fontWeight: 700 }}>
                                    <h6>Pelantikan Ketua dan Pengurus IKAPCR Periode 2021-2023</h6>   
                                </div>
                            </div>
                        </Card>
                    </Col>
                </Row>

            </Container >
        </div >
    );
}

export default Galeri;