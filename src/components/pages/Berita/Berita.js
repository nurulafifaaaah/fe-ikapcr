import React, { Component, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../assets/css/landingPage.css';
import { Nav, Container, Row, Col, Card, Table, Image, Button } from 'react-bootstrap';
import BeritaImage from '../../assets/images/Berita1.jpg';
import axios from 'axios';

function Berita() {
  
    const [berita, setBerita] = useState([]);

    const navigate = useNavigate(); 

    const navigateToBeritaDetail = () => {
        navigate('/beritadetail');
      };

    useEffect(() => {
        const getBerita = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/beritas');
                console.log(response);
                const myBerita = response.data;
                setBerita(myBerita);
            } catch (error) {
                console.log(error);
            }
        };
        getBerita();
    }, []);

    



        return (
            <div>
                <Container style={{ padding: 30 }}>
                    <div className='MainTitle'>
                        <h1><strong>Berita</strong></h1>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                       
                        <Row>
                            {berita.map((beritas) =>(
                            <Col sm>
                                <div className='Card'>
                                
                                    <Card style={{marginRight:10}} key={beritas.id}>
                                        <Card.Img src={BeritaImage} style={{ padding: 10 }} />
                                        <Card.Body>
                                            <div style={{ marginTop: -20, marginBottom: 10 }} >
                                                <small className="text-muted" >{beritas.tanggal_posting}</small>
                                            </div>
                                            <div className='cardTittle'>
                                                <Card.Title>{beritas.judul_berita}</Card.Title>
                                            </div>
                                            <div>
                                                <Card.Text className='cardText'>
                                                {beritas.isi_berita}
                                                </Card.Text>
                                                <div className='pLihatSemua'>
                                                <Button onClick={navigateToBeritaDetail}>Lihat Selengkapnya</Button>
                                                </div>
                                            </div>
                                        </Card.Body>
                                    </Card>
                               </div>
                            </Col>))} 
                        </Row>
                    </div>
                </Container>
            </div>
        );
    }


export default Berita;