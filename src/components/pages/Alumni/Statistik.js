import React, { Component } from 'react';
import { Container, Card } from 'react-bootstrap';

class Statistik extends Component {
    render() {
        return (
            <div>
                <Container style={{ padding: 30 }}>
                    <div className='MainTitle'>
                        <h1><strong>Statistik</strong></h1>
                    </div>
                    <Card>
                        <Card.Body>
                            Statistik
                        </Card.Body>
                    </Card>
                </Container>
            </div>
        );
    }
}

export default Statistik;