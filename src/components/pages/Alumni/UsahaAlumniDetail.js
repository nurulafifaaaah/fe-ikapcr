import React, { Component } from 'react';
import { Container, Card } from 'react-bootstrap';


class UsahaAlumniDetail extends Component {
    render() {
        return (
            <div>
                <Container style={{ padding: 30 }}>
                    <div className='MainTitle'>
                        <h1><strong>Usaha Alumni Detail</strong></h1>
                    </div>
                    <Card>
                        <Card.Body>Usaha Alumni Detail</Card.Body>
                    </Card>
                    </Container>
            </div>
        );
    }
}

export default UsahaAlumniDetail;