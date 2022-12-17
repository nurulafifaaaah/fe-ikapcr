import React, { Component } from 'react';
import { Container, Image, Row, Col } from 'react-bootstrap';
import KetuaImage from '../../assets/images/ketuaikapcr.png'
import '../../assets/css/GlobalStyling.css'

class SekapurSirih extends Component {
    render() {
        return (
            <div>
                <Container style={{ padding: 30 }}>
                    <div className='MainTitle'>
                        <h1><strong>Sekapur Sirih</strong></h1>
                    </div>
                    <div style={{ textAlign: 'justify' }}>
                        <Row>
                            <Col xs={3}>  <Image src={KetuaImage} style={{ width: 230, marginBottom: 20 }}></Image></Col>
                            <Col>
                                <p>Assalammualaikum Warahmatullah Wabarakatuh,</p>
                                <p>Salam Sejahtera untuk kita semua</p>
                                <p> Pertama-tama kita panjatkan puji syukur kepada Tuhan Yang Maha Esa atas Karunia-Nya hingga kita masih diberikan
                                    kesehatan untuk melakukan aktivitas sehari-hari. Perkenankan saya mengucapkan terima kasih kepada seluruh rekan-rekan
                                    alumni Politeknik Caltex Riau yang telah memberikan kepercayaan, amanat dan juga tanggung jawab
                                    kepada saya sebagai Ketua Umum IKAPCR Periode 2021 – 2024 sesuai hasil Pemilihan Umum
                                    Seluruh Alumni Politeknik Caltex Riau pada tanggal 04 Desember 2020.</p>
                            </Col>
                        </Row>

                        <div>
                            <p>
                                Adalah hal yang menggembirakan, IKAPCRtelah berhasil membangun sebuah website dengan alamat domain internet http://ika.pcr.ac.id yang kini sedang rekan-rekan buka.</p>
                            <p> Adapun keberadaan Website ini dimaksudkan sebagai media komunikasi antar sesama alumni dan antara alumni dengan almater bahkan antara alumni dengan masyarakat luas.
                                Dengan adanya website ini diharapkan kita semua dapat saling berkomunikasi untuk mendiskusikan
                                berbagai pemikiran konstruktif dan menginformasikan berbagai hal baik mengenai aktifitas IKAPCR, Almamater, keluarga alumni maupun mengenai kehidupan
                                bermasyarakat, berbangsa dan bernegara.</p>
                            <p>Keberadaan website ini tidak serta merta menghapus Grup Facebook IKATAN ALUMNI POLITEKNIK CALTEX RIAU dan
                                Instagram : IKAPCR, serta Telegram IKAPCR, ketiganya terintegrasi dengan website.</p>
                            <p> Langkah berikut adalah tugas kita bersama para alumni, untuk menginformasikan ke rekan-rekan
                                alumni lainnya yang belum mengetahui keberadaan website ini sehingga mereka bisa mengikuti kegiatan-kegiatan
                                serta rencana-rencana yang diagendakan oleh pengurus IKAPCR.</p>
                            <p>Website ini kedepan akan terus dikembangkan seiring dengan kebutuhan IKAPCR demi kepentingan kemajuan kita semua.
                                Bahwa masih ada kekurangan-kekurangan tentunya akan dilakukan perbaikan dengan dukungan aktif para alumni.</p>
                            <p>Akhir kata, kami mengucapkan terima kasih banyak kepada semua pihak yang telah membantu pembangunan website ini.</p>
                            <p> Semoga website ini bermanfaat bagi kita semua.</p>
                            <p> SALAM KOMPAK</p>
                            <p> KETUA IKAPCR </p>
                            <p> <strong>Aditya Widyawan Prima, S.Kom, M.Si, CCMs, CP.NLP, CLMA</strong></p>
                        </div>
                    </div>

                </Container>
            </div>
        );
    }
}

export default SekapurSirih;