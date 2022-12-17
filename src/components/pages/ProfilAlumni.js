import React, { Component, useEffect, useState } from 'react';
import { Container, Card, Row, Col, Image, Table, Button } from 'react-bootstrap';
import axios from 'axios';
import { ImProfile, ImOffice } from 'react-icons/im'
import ProfilAlumniImage from '../assets/images/profilalumni.jpg'


function ProfilAlumni() {

    const [repo, setRepo] = useState([]);

    useEffect(() => {
        const getRepo = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/alumnis/639d782d4270f7ee75cbcca7');
                console.log(response);
                const myRepo = response.data;
                setRepo(myRepo);
            } catch (error) {
                console.log(error);
            }
        };
        getRepo();
    }, []);


    return (
        <div>
            <Container style={{ padding: 30 }}>
                <div className='MainTitle'>
                    <h1><strong>Profil Alumni</strong></h1>
                </div>
                <div>
                    <Row>
                        <Col sm={4}>
                            <Card>
                                    <div style={{ padding: 30 }}>
                                        <Image roundedCircle src={ProfilAlumniImage} style={{ width: 150, marginBottom: 15 }} />
                                        <Table responsive='sm' style={{ color: 'black' }} key={repo.id}>
                                            <tr>
                                                <td style={{ width: 80, fontWeight: 650, color: '#091156' }}>Nama</td>
                                                <td style={{ width: 20 }}>:</td>
                                                <td>{repo.nama} </td>
                                            </tr>
                                            <tr>
                                                <td style={{ width: 80, fontWeight: 650, color: '#091156' }}>Jurusan</td>
                                                <td>:</td>
                                                <td>Teknologi Informasi</td>
                                            </tr>
                                            <tr>
                                                <td style={{ width: 80, fontWeight: 650, color: '#091156' }}>Prodi</td>
                                                <td>:</td>
                                                <td>Sistem Informasi</td>
                                            </tr>
                                            <tr>
                                                <td style={{ width: 80, fontWeight: 650, color: '#091156' }}>Generasi</td>
                                                <td>:</td>
                                                <td>19</td>
                                            </tr>
                                        </Table>
                                    </div>

                            </Card>
                            <div style={{ display: 'flex', justifyContent: 'end', marginTop: 10 }}>
                                <Button style={{ borderRadius: 50, background: '#195C92' }} >Edit Profil</Button>
                            </div>
                        </Col>
                        <Col sm={8}>
                            <Card>
                                <div style={{ padding: 30 }}>

                                    <Card.Header style={{ color: '#091156', fontWeight: 700, fontSize: 20 }}>
                                        <div>
                                            <ImProfile style={{ marginRight: 10 }} />
                                            Infromasi Pribadi
                                        </div>
                                    </Card.Header>

                                    <Table responsive='sm' style={{ color: 'black' }}>
                                        <tr>
                                            <td style={{
                                                width: 150,
                                                fontWeight: 5150,
                                                color: '#091156'
                                            }}>Nama</td>
                                            <td style={{ width: 20 }}>:</td>
                                            <td>{repo.nama} </td>
                                        </tr>
                                        <tr>
                                            <td style={{
                                                width: 150,
                                                fontWeight: 5150,
                                                color: '#091156'
                                            }}>Agama</td>
                                            <td style={{ width: 20 }}>:</td>
                                            <td>{repo.agama} </td>
                                        </tr>
                                        <tr>
                                            <td style={{
                                                width: 150,
                                                fontWeight: 5150,
                                                color: '#091156'
                                            }}>Jenis Kelamin</td>
                                            <td style={{ width: 20 }}>:</td>
                                            <td>{repo.jenis_kelamin} </td>
                                        </tr>
                                        <tr>
                                            <td style={{
                                                width: 150,
                                                fontWeight: 5150,
                                                color: '#091156'
                                            }}>Tempat Lahir</td>
                                            <td style={{ width: 20 }}>:</td>
                                            <td>{repo.tempat_lahir} </td>
                                        </tr>
                                        <tr>
                                            <td style={{
                                                width: 150,
                                                fontWeight: 5150,
                                                color: '#091156'
                                            }}>Tanggal Lahir</td>
                                            <td style={{ width: 20 }}>:</td>
                                            <td>{repo.tanggal_lahir} </td>
                                        </tr>
                                        <tr>
                                            <td style={{
                                                width: 150,
                                                fontWeight: 5150,
                                                color: '#091156'
                                            }}>Alamat</td>
                                            <td style={{ width: 20 }}>:</td>
                                            <td>{repo.alamat} </td>
                                        </tr>
                                        <tr>
                                            <td style={{
                                                width: 150,
                                                fontWeight: 5150,
                                                color: '#091156'
                                            }}>Provinsi</td>
                                            <td style={{ width: 20 }}>:</td>
                                            <td>{repo.provinsi} </td>
                                        </tr>
                                        <tr>
                                            <td style={{
                                                width: 150,
                                                fontWeight: 5150,
                                                color: '#091156'
                                            }}>Kota/Kabupaten</td>
                                            <td style={{ width: 20 }}>:</td>
                                            <td>{repo.kota} </td>
                                        </tr>
                                        <tr>
                                            <td style={{
                                                width: 150,
                                                fontWeight: 5150,
                                                color: '#091156'
                                            }}>Kelurahan</td>
                                            <td style={{ width: 20 }}>:</td>
                                            <td>{repo.kelurahan} </td>
                                        </tr>
                                        <tr>
                                            <td style={{
                                                width: 150,
                                                fontWeight: 5150,
                                                color: '#091156'
                                            }}>Kecamatan</td>
                                            <td style={{ width: 20 }}>:</td>
                                            <td>{repo.kecamatan} </td>
                                        </tr>
                                        <tr>
                                            <td style={{
                                                width: 150,
                                                fontWeight: 5150,
                                                color: '#091156'
                                            }}>No HP</td>
                                            <td style={{ width: 20 }}>:</td>
                                            <td>{repo.no_hp} </td>
                                        </tr>
                                        <tr>
                                            <td style={{
                                                width: 150,
                                                fontWeight: 5150,
                                                color: '#091156'
                                            }}>Email</td>
                                            <td style={{ width: 20 }}>:</td>
                                            <td>{repo.email_alumni} </td>
                                        </tr>
                                        <tr>
                                            <td style={{
                                                width: 150,
                                                fontWeight: 5150,
                                                color: '#091156'
                                            }}>Username</td>
                                            <td style={{ width: 20 }}>:</td>
                                            <td>{repo.username} </td>
                                        </tr>
                                    </Table>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                    <div style={{ display: 'flex', justifyContent: 'end', paddingTop: 20 }}>
                        <Col sm={8}>
                            <Card>
                                <div style={{ padding: 30 }}>

                                    <Card.Header style={{ color: '#091156', fontWeight: 700, fontSize: 20 }}>
                                        <div>
                                            <ImOffice style={{ marginRight: 10 }} />
                                            Infromasi Pekerjaan
                                        </div>
                                    </Card.Header>

                                    <Table responsive='sm' style={{ color: 'black' }}>
                                        <tr>
                                            <td style={{
                                                width: 150,
                                                fontWeight: 5150,
                                                color: '#091156'
                                            }}>Status Pekerjaan</td>
                                            <td style={{ width: 20 }}>:</td>
                                            <td>Bekerja</td>
                                        </tr>
                                        <tr>
                                            <td style={{
                                                width: 150,
                                                fontWeight: 5150,
                                                color: '#091156'
                                            }}>Nama Kantor</td>
                                            <td style={{ width: 20 }}>:</td>
                                            <td>NW group</td>
                                        </tr>
                                        <tr>
                                            <td style={{
                                                width: 150,
                                                fontWeight: 5150,
                                                color: '#091156'
                                            }}>Alamat</td>
                                            <td style={{ width: 20 }}>:</td>
                                            <td>Jalan Sudirman</td>
                                        </tr>
                                        <tr>
                                            <td style={{
                                                width: 150,
                                                fontWeight: 5150,
                                                color: '#091156'
                                            }}>Provinsi</td>
                                            <td style={{ width: 20 }}>:</td>
                                            <td>Jawa Barat</td>
                                        </tr>
                                        <tr>
                                            <td style={{
                                                width: 150,
                                                fontWeight: 5150,
                                                color: '#091156'
                                            }}>Kota/Kabupaten</td>
                                            <td style={{ width: 20 }}>:</td>
                                            <td>Bandung</td>
                                        </tr>
                                        <tr>
                                            <td style={{
                                                width: 150,
                                                fontWeight: 5150,
                                                color: '#091156'
                                            }}>Divisi</td>
                                            <td style={{ width: 20 }}>:</td>
                                            <td>X</td>
                                        </tr>
                                        <tr>
                                            <td style={{
                                                width: 150,
                                                fontWeight: 5150,
                                                color: '#091156'
                                            }}>Bidang</td>
                                            <td style={{ width: 20 }}>:</td>
                                            <td>IT</td>
                                        </tr>
                                        <tr>
                                            <td style={{
                                                width: 150,
                                                fontWeight: 5150,
                                                color: '#091156'
                                            }}>Jabatan</td>
                                            <td style={{ width: 20 }}>:</td>
                                            <td>Manager</td>
                                        </tr>
                                    </Table>
                                </div>
                            </Card>
                        </Col>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default ProfilAlumni;
