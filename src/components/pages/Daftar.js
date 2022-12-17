import { React, Component, useContext, useState } from 'react';
import {
    Container, Row, Col, Image,
    Form, Button, Accordion, Card,
    useAccordionButton, AccordionContext, InputGroup
} from 'react-bootstrap';
import DaftarImage from '../assets/images/daftar.png'

function TitleContext({ children, eventKey, callback }) {
    const { activeEventKey } = useContext(AccordionContext);

    const decoratedOnClick = useAccordionButton(
        eventKey,
        () => callback && callback(eventKey),
    );

    const isCurrentEventKey = activeEventKey === eventKey;

    return (
        <div onClick={decoratedOnClick}>
            {children}
        </div>
    );
}

function Daftar() {

    const [validated, setValidated] = useState(false);

    const handleSubmit = event => {
        event.preventDefault();
        event.preventDefault();
        var dataAlumni = {
            'nama': nama,
            'jenis_kelamin': jenis_kelamin,
            'agama': agama,
            'tempat_lahir': tempat_lahir,
            'tanggal_lahir': tanggal_lahir,
            'alamat': alamat,
            'provinsi': provinsi,
            'kota': kota,
            'kecamatan': kecamatan,
            'kelurahan': kelurahan,
            'no_hp': no_hp,
            'email_alumni': email_alumni,
            'username': username,
            'password': password,
        }
        fetch('http://localhost:8000/api/alumnis/', {
            method: 'POST',
            headers: {
                Accept: 'application/form-data',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dataAlumni),
        })
            .then(res => res.json())
    };

    const [nama, setNama] = useState('');
    const [jenis_kelamin, setJenisKelamin] = useState('');
    const [agama, setAgama] = useState('');
    const [tempat_lahir, setTempatLahir] = useState('');
    const [tanggal_lahir, setTanggalLahir] = useState('');
    const [alamat, setAlamat] = useState('');
    const [provinsi, setProvinsi] = useState('');
    const [kota, setKota] = useState('');
    const [kecamatan, setKecamatan] = useState('');
    const [kelurahan, setKelurahan] = useState('');
    const [no_hp, setNoHp] = useState('');
    const [email_alumni, setEmailAlumni] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    return (
        <Container style={{ padding: 30 }}>
            <div className='MainTitle'>
                <h1><strong>Pendaftaran Alumni</strong></h1>
            </div>
            <Row>
                <Col sm='5'>
                    <div>
                        <Image src={DaftarImage} style={{ width: '100%' }} />
                    </div>
                </Col>
                <Col>
                    <div style={{marginLeft:20}}>
                        <Accordion defaultActiveKey="0" alwaysOpen>
                            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                                <div style={{ paddingBottom: 20 }}>
                                    <div style={{ backgroundColor: 'white', borderRadius: 5, border: '0.5px solid #195C92' }}>
                                        <div style={{ padding: 10, marginLeft: 20, color: '#195C92', fontWeight: 650 }}>
                                            <TitleContext eventKey="0" style={{backgroundColor:'black'}}>1. Informasi Pribadi Alumni</TitleContext>
                                            <Accordion.Collapse eventKey="0">
                                                <div style={{ padding: 20, color: 'black', fontWeight: 400 }}>
                                                    <div style={{ marginLeft: '-20px' }}>
                                                        <p>informasi ini beriskan data data pribadi, yang nantinya ... </p>
                                                    </div>

                                                    <Row >
                                                        <Col>
                                                            <Form.Group >
                                                                <Form.Label>Nama Lengkap</Form.Label>
                                                                <Form.Control
                                                                    required
                                                                    type="text"
                                                                    placeholder="Nama Lengkap"
                                                                    id="nama"
                                                                    onChange={(e) => setNama(e.target.value)}
                                                                />
                                                            </Form.Group>
                                                            <Form.Group >
                                                                <Form.Label>Tempat Lahir</Form.Label>
                                                                <Form.Control
                                                                    required
                                                                    id='tempat_lahir'
                                                                    type="text"
                                                                    placeholder="Tempat Lahir"
                                                                    onChange={(e) => setTempatLahir(e.target.value)}
                                                                />
                                                            </Form.Group>
                                                            <Form.Group >
                                                                <Form.Label>Tanggal Lahir</Form.Label>
                                                                <Form.Control
                                                                    required
                                                                    id='tanggal_lahir'
                                                                    type="date"
                                                                    placeholder="Tanggal Lahir"
                                                                    onChange={(e) => setTanggalLahir(e.target.value)}
                                                                />

                                                            </Form.Group>
                                                            <Form.Group>
                                                                <Form.Label>Jenis Kelamin</Form.Label>
                                                                <Form.Select
                                                                    required
                                                                    id='jenis_kelamin'
                                                                    type="text"
                                                                    onChange={(e) => setJenisKelamin(e.target.value)}
                                                                >
                                                                    <option>Pilih Jenis Kelamin</option>
                                                                    <option value="Perempuan">Perempuan</option>
                                                                    <option value="Laki-laki">Laki-laki</option>
                                                                </Form.Select>
                                                            </Form.Group>
                                                            <Form.Group >
                                                                <Form.Label>Agama</Form.Label>
                                                                <Form.Select
                                                                    required
                                                                    type="text"
                                                                    id='agama'
                                                                    onChange={(e) => setAgama(e.target.value)}
                                                                >
                                                                    <option>Pilih Agama</option>
                                                                    <option value="Islam">Islam</option>
                                                                    <option value="Kristen Protestan">Kristen Protestan</option>
                                                                    <option value="Kristen Katolik">Kristen Katolik</option>
                                                                    <option value="Budha">Budha</option>
                                                                    <option value="Konghuchu">Konghuchu</option>
                                                                </Form.Select>
                                                            </Form.Group>
                                                            <Form.Group>
                                                                <Form.Label>Alamat</Form.Label>
                                                                <Form.Control
                                                                    required
                                                                    id='alamat'
                                                                    type="text"
                                                                    placeholder="Alamat"
                                                                    onChange={(e) => setAlamat(e.target.value)}
                                                                />

                                                            </Form.Group>
                                                            <Form.Group >
                                                                <Form.Label>Nomor HP</Form.Label>
                                                                <Form.Control
                                                                    required
                                                                    type="number"
                                                                    id='no_hp'
                                                                    placeholder="Nomor HP"
                                                                    onChange={(e) => setNoHp(e.target.value)}
                                                                />
                                                            </Form.Group>
                                                        </Col>
                                                        <Col>
                                                            <Form.Group >
                                                                <Form.Label>Provinsi</Form.Label>
                                                                <Form.Control
                                                                    required
                                                                    id='provinsi'
                                                                    type="text"
                                                                    placeholder="Provinsi"
                                                                    onChange={(e) => setProvinsi(e.target.value)}
                                                                />
                                                            </Form.Group>
                                                            <Form.Group>
                                                                <Form.Label>Kota/Kabupaten</Form.Label>
                                                                <Form.Control
                                                                    required
                                                                    id='kota'
                                                                    type="text"
                                                                    placeholder="Kota"
                                                                    onChange={(e) => setKota(e.target.value)}
                                                                />
                                                            </Form.Group>
                                                            <Form.Group >
                                                                <Form.Label>Kecamatan</Form.Label>
                                                                <Form.Control
                                                                    required
                                                                    id='kecamatan'
                                                                    type="text"
                                                                    placeholder="Kecamatan"
                                                                    onChange={(e) => setKecamatan(e.target.value)}
                                                                />
                                                            </Form.Group>
                                                            <Form.Group >
                                                                <Form.Label>Kelurahan</Form.Label>
                                                                <Form.Control
                                                                    required
                                                                    id='kelurahan'
                                                                    type="text"
                                                                    placeholder="Kelurahan"
                                                                    onChange={(e) => setKelurahan(e.target.value)}
                                                                />
                                                            </Form.Group>
                                                            <Form.Group controlId="validationCustom01">
                                                                <Form.Label>Email</Form.Label>
                                                                <Form.Control
                                                                    required
                                                                    id='email_alumni'
                                                                    type="email"
                                                                    placeholder="Email"
                                                                    onChange={(e) => setEmailAlumni(e.target.value)}
                                                                />

                                                            </Form.Group>
                                                            <Form.Group>
                                                                <Form.Label>Username</Form.Label>
                                                                <InputGroup hasValidation>
                                                                    <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                                                                    <Form.Control
                                                                        required
                                                                        id='username'
                                                                        type="username"
                                                                        placeholder="Username"
                                                                        onChange={(e) => setUsername(e.target.value)}
                                                                    />
                                                                </InputGroup>
                                                            </Form.Group>
                                                            <Form.Group>
                                                                <Form.Label>Password</Form.Label>
                                                                <InputGroup hasValidation>
                                                                    <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                                                                    <Form.Control
                                                                        required
                                                                        id='password'
                                                                        type="password"
                                                                        placeholder="Password"
                                                                        onChange={(e) => setPassword(e.target.value)}
                                                                    />
                                                                </InputGroup>
                                                            </Form.Group>
                                                        </Col>
                                                    </Row>
                                                    <Row>
                                                        <Form.Group controlId="formFile" className="mb-3">
                                                            <Form.Label>Inputkan Foto Profil</Form.Label>
                                                            <Form.Control type="file" />
                                                        </Form.Group>
                                                    </Row>
                                                    <div style={{ display: 'flex', justifyContent: 'end' }}>
                                                        <div style={{
                                                            display: 'flex', justifyContent: 'center', backgroundColor: '#0d6efd',
                                                            borderRadius: 5, color: 'white', width: '60px', height: '30px',
                                                        }}>
                                                            {/* <Button type="submit" onClick={() => handleSubmit()} >Daftar</Button> */}
                                                            <TitleContext
                                                                style={{ padding: '12px 6p' }}
                                                                eventKey='1'>Next</TitleContext>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Accordion.Collapse>
                                        </div>
                                    </div>
                                </div>
                                <div style={{ paddingBottom: 20 }}>
                                    <div style={{ backgroundColor: 'white', borderRadius: 5, border: '0.5px solid #195C92' }}>
                                        <div style={{ padding: 10, marginLeft: 20, color: '#195C92', fontWeight: 650 }}>
                                            <TitleContext>2. Informasi Kemahasiswaan</TitleContext>
                                            <Accordion.Collapse eventKey="1">
                                                <div style={{ padding: 20, color: 'black', fontWeight: 400 }}>
                                                    <div style={{ marginLeft: '-20px' }}>
                                                        <p>informasi ini beriskan data tentang prodi dan generasi </p>
                                                    </div>
                                                    <Row>
                                                        <Col>
                                                            <Form.Group>
                                                                <Form.Label>Jurusan</Form.Label>
                                                                <Form.Select
                                                                    required
                                                                    type="text"
                                                                >
                                                                    <option>Pilih Jurusan</option>
                                                                    <option value="Jurusan Teknologi Informasi">Jurusan Teknologi Informasi</option>
                                                                    <option value="Jurusan Teknik Industri">Jurusan Teknik Industri</option>
                                                                </Form.Select>
                                                            </Form.Group>
                                                            <Form.Group >
                                                                <Form.Label>Generasi</Form.Label>
                                                                <Form.Control
                                                                    required
                                                                    // id='kelurahan'
                                                                    type="number"
                                                                    placeholder="generasi"
                                                                // onChange={(e) => setKelurahan(e.target.value)}
                                                                />
                                                            </Form.Group>
                                                        </Col>
                                                        <Col>
                                                            <Form.Group>
                                                                <Form.Label>Prodi</Form.Label>
                                                                <Form.Select
                                                                    required
                                                                    type="text"
                                                                >
                                                                    <option>Pilih Prodi</option>
                                                                    <option value="Teknik Informatika">Teknik Informatika</option>
                                                                    <option value="Sistem Informasi">Sistem Informasi</option>
                                                                    <option value="Teknik Komputer">Teknik Komputer</option>
                                                                    <option value="Akuntansi">Akuntansi</option>
                                                                    <option value="Teknik Mesin">Teknik Mesin</option>
                                                                    <option value="Teknik Listrik">Teknik Listrik</option>
                                                                    <option value="Teknik Mekatronika">Teknik Mekatronika</option>
                                                                    <option value="Teknik Telekomunikasi">Teknik Telekomunikasi</option>
                                                                    <option value="Teknik Elektronika dan Komunikasi">Teknik Elektronika dan Komunikasi</option>
                                                                    <option value="Teknik Elektronika">Teknik Elektronika</option>
                                                                </Form.Select>
                                                            </Form.Group>
                                                        </Col>

                                                    </Row>
                                                    <div style={{ display: 'flex', justifyContent: 'end', marginTop: 10 }}>
                                                        <div style={{ display: 'flex', justifyContent: 'center', backgroundColor: '#0d6efd', borderRadius: 5, color: 'white', width: '60px', height: '30px', }}>
                                                            <TitleContext
                                                                style={{}}
                                                                eventKey='2'>Next</TitleContext>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Accordion.Collapse>
                                        </div>
                                    </div>
                                </div>
                                <div style={{ paddingBottom: 20 }}>
                                    <div style={{ backgroundColor: 'white', borderRadius: 5, border: '0.5px solid #195C92' }}>
                                        <div style={{ padding: 10, marginLeft: 20, color: '#195C92', fontWeight: 650 }}>
                                            <TitleContext>3. Informasi Pekerjaan</TitleContext>
                                            <Accordion.Collapse eventKey="2">
                                                <div style={{ padding: 20, color: 'black', fontWeight: 400 }}>
                                                    <div style={{ marginLeft: '-20px' }}>
                                                        <p>informasi ini beriskan data pekerjaan </p>
                                                    </div>
                                                    <Row>
                                                        <Col>
                                                            <Form.Group>
                                                                <Form.Label>Status Pekerjaan</Form.Label>
                                                                <Form.Select
                                                                    required
                                                                    type="text"
                                                                >
                                                                    <option>Pilih Jurusan</option>
                                                                    <option value="Bekerja">Bekerja</option>
                                                                    <option value="Belum Bekerja">Belum Bekerja</option>
                                                                </Form.Select>
                                                            </Form.Group>
                                                            <Form.Group >
                                                                <Form.Label>Nama Kantor</Form.Label>
                                                                <Form.Control
                                                                    required
                                                                    type="text"
                                                                    placeholder="Nama Kantor"
                                                                // id="nama"
                                                                // onChange={(e) => setNama(e.target.value)}
                                                                />
                                                            </Form.Group>
                                                            <Form.Group >
                                                                <Form.Label>Alamat</Form.Label>
                                                                <Form.Control
                                                                    required
                                                                    type="text"
                                                                    placeholder="Alamat"
                                                                // id="nama"
                                                                // onChange={(e) => setNama(e.target.value)}
                                                                />
                                                            </Form.Group>
                                                            <Form.Group >
                                                                <Form.Label>Provinsi</Form.Label>
                                                                <Form.Control
                                                                    required
                                                                    type="text"
                                                                    placeholder="Provinsi"
                                                                // id="nama"
                                                                // onChange={(e) => setNama(e.target.value)}
                                                                />
                                                            </Form.Group>
                                                        </Col>
                                                        <Col>
                                                            <Form.Group >
                                                                <Form.Label>Kota</Form.Label>
                                                                <Form.Control
                                                                    required
                                                                    type="text"
                                                                    placeholder="Kota"
                                                                // id="nama"
                                                                // onChange={(e) => setNama(e.target.value)}
                                                                />
                                                            </Form.Group>
                                                            <Form.Group >
                                                                <Form.Label>Divisi</Form.Label>
                                                                <Form.Control
                                                                    required
                                                                    type="text"
                                                                    placeholder="Divisi"
                                                                // id="nama"
                                                                // onChange={(e) => setNama(e.target.value)}
                                                                />
                                                            </Form.Group>
                                                            <Form.Group >
                                                                <Form.Label>Bidang</Form.Label>
                                                                <Form.Control
                                                                    required
                                                                    type="text"
                                                                    placeholder="Bidang"
                                                                // id="nama"
                                                                // onChange={(e) => setNama(e.target.value)}
                                                                />
                                                            </Form.Group>
                                                            <Form.Group >
                                                                <Form.Label>Jabatan</Form.Label>
                                                                <Form.Control
                                                                    required
                                                                    type="text"
                                                                    placeholder="Jabatan"
                                                                // id="nama"
                                                                // onChange={(e) => setNama(e.target.value)}
                                                                />
                                                            </Form.Group>
                                                        </Col>

                                                    </Row>
                                                    <div style={{ display: 'flex', justifyContent: 'end', marginTop: 10 }}>
                                                        <div style={{ display: 'flex', justifyContent: 'center', backgroundColor: '#0d6efd', borderRadius: 5, color: 'white', width: '60px', height: '30px', }}>
                                                            <TitleContext
                                                                style={{}}
                                                                eventKey='2'>Next</TitleContext>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Accordion.Collapse>
                                        </div>
                                    </div>
                                </div>
                            </Form>
                        </Accordion>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Daftar;
