import '../assets/css/navigationBar.css';
import React, { Component } from 'react';
import { Button, Form, Nav, Navbar, NavDropdown, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import LogoImage from '../assets/images/logoikapcr.png'
import ProfilImage from '../assets/images/profilakun.png'

class NavigationBar extends Component {
    render() {
        return (
            <div>
                <Navbar variant='light' expand="lg" fixed="top"  style={{ paddingTop: 20, backgroundColor:'white' }}>
                    <Container>
                        <Navbar.Brand href="/">
                            <img
                                src={LogoImage}
                                className="d-inline-block align-top"
                            />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav className="justify-content-end flex-grow-1 pe-3" >
                               
                                <Nav.Link href="/">Beranda</Nav.Link>
                                <Nav.Link href="/agenda">Agenda</Nav.Link>
                                <NavDropdown title="Berita" id="navbarScrollingDropdown">
                                    <NavDropdown.Header className='dropdownHeader' style={{ paddingTop: 1 }} ></NavDropdown.Header>
                                    <NavDropdown.Item href="/berita">Berita</NavDropdown.Item>
                                    <NavDropdown.Item href="https://beasiswa.ika.pcr.ac.id/">Beasiswa</NavDropdown.Item>
                                    <NavDropdown.Item href="https://ikapcrberbagi.id/">Donasi</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="Profil Alumni" id="navbarScrollingDropdown">
                                    <NavDropdown.Header className='dropdownHeader' style={{ paddingTop: 1 }} ></NavDropdown.Header>
                                    <NavDropdown.Item href="/visimisi">Visi Misi</NavDropdown.Item>
                                    <NavDropdown.Item href="/sekapursirih">Sekapur Sirih</NavDropdown.Item>
                                    <NavDropdown.Item href="/strukturorganisai">Struktur Organisai</NavDropdown.Item>
                                    <NavDropdown.Item href="/progjadepartment">Progja Department</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="Alumni" id="navbarScrollingDropdown">
                                    <NavDropdown.Header className='dropdownHeader' style={{ paddingTop: 1 }} ></NavDropdown.Header>
                                    <NavDropdown.Item href="/kisahalumni">Kisah Alumni</NavDropdown.Item>
                                    <NavDropdown.Item href="/statistik">Statistik</NavDropdown.Item>
                                    <NavDropdown.Item href="/usahaalumni">Usaha Alumni</NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link href='/galeri'>Galeri</Nav.Link>
                                <Nav.Link href="/loker">Loker</Nav.Link>
                                <NavDropdown title="Tentang" id="navbarScrollingDropdown">
                                    <NavDropdown.Header className='dropdownHeader' style={{ paddingTop: 1 }} ></NavDropdown.Header>
                                    <NavDropdown.Item href="/faq">FAQ</NavDropdown.Item>
                                    <NavDropdown.Item href="/kontak">Kontak</NavDropdown.Item>
                                </NavDropdown>
                                {/* <div>
                                <Form >
                                    <Form.Control
                                        type="search"
                                        placeholder="Search"
                                        className="me-2"
                                        aria-label="Search"
                                    />
                                </Form></div> */}
                            </Nav>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Nav.Link href="daftar">
                                    <Navbar.Brand >
                                        <img src={ProfilImage} />
                                    </Navbar.Brand>
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        );
    }
}

export default NavigationBar;