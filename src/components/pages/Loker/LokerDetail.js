import React, { Component } from 'react';
import { Container, Card } from 'react-bootstrap';


class LokerDetail extends Component {
    render() {
        return (
            <div>
                <Container style={{ padding: 30 }}>
                    <div className='MainTitle'>
                        <h1><strong>Loker Detail</strong></h1>
                    </div>
                    <Card>
                        <Card.Body>Loker Detail</Card.Body>
                    </Card>
                    </Container>
            </div>
        );
    }
}

export default LokerDetail;