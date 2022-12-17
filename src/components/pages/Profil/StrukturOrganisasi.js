import React, { Component } from 'react';
import { Container, Card, Image } from 'react-bootstrap';
import StrukturImage from '../../assets/images/struktur.png'


class StrukturOrganisasi extends Component {
    render() {
        return (
            <div>
                <Container style={{ padding: 30 }}>
                    <div className='MainTitle'>
                        <h1><strong>Struktur Organisasi</strong></h1>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <Card style={{ border: 'solid #091156' }}>

                            <Image src={StrukturImage} style={{ width: '100%' }}></Image>
                        </Card>
                    </div>
                </Container>
            </div>
        );
    }
}

export default StrukturOrganisasi;