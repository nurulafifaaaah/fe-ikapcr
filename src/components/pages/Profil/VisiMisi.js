import React, { Component } from 'react';
import { Row, Col, Image, Container } from 'react-bootstrap';
import VisiMisiImage from "../../assets/images/visimisi.png"

class VisiMisi extends Component {
    render() {
        return (
            <div>
                <Container style={{ padding: 30 }}>
                    <div className='MainTitle'>
                        <h1><strong>Visi Misi</strong></h1>
                    </div>
                    <Row>
                        <Col sm>
                            <div style={{ textAlign: 'justify' }}>
                                <h3>Visi</h3>
                                <div>
                                    <p>Mewujudkan IKAPCR sebagai wadah organisasi alumni yang modern berbasis
                                        kewirausahaan serta bermanfaat bagi alumni, mahasiswa, kampus dan masyarakat.</p>
                                </div>

                                <div>
                                    <h3>Misi</h3>
                                    <div style={{marginLeft:'-17px'}}>
                                        <ol>
                                            <li><strong>KO</strong>mitmen Menjalin silaturahmi & persaudaraan sesama alumni PCR.</li>
                                            <li><strong>M</strong>enjadikan Ikatan alumni yang solid, partisipatif dan kontributif dalam mendukung program PCR.</li>
                                            <li><strong>P</strong>enyediaan sarana dalam mendukung dan memfasilitasi alumni PCR dalam mengembangkan kompetensi & kemampuan profesional dalam berbagai sektor.</li>
                                            <li><strong>A</strong>ktif mengobarkan semangat entrepreneurshihp serta memberikan bantuan sosial media marketing bagi alumni PCR dalam menjalankan usaha.</li>
                                            <li><strong>K</strong>reatif mengembangkan organisasi dan bekerja sama dengan berbagai pihak secara produktif.</li>
                                        </ol>

                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col sm><Image src={VisiMisiImage} style={{ width: '100%' }}></Image></Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default VisiMisi;