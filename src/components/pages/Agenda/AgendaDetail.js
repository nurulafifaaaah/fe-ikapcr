import React, { Component } from 'react';
import { Container, Card } from 'react-bootstrap';


class AgendaDetail extends Component {
    render() {
        return (
            <div>
                <Container style={{ padding: 30 }}>
                    <div className='MainTitle'>
                        <h1><strong>Agenda Detail</strong></h1>
                    </div>
                    <Card>
                        <Card.Body>Agenda Detail</Card.Body>
                    </Card>
                    </Container>
            </div>
        );
    }
}

export default AgendaDetail;