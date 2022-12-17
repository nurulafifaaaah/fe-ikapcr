import React, { Component } from 'react';
import { Container, Card } from 'react-bootstrap';


class ProgjaDepartment extends Component {
    render() {
        return (
            <div>
                 <Container style={{ padding: 30 }}>
            <div className='MainTitle'>
                <h1><strong>Progja Department</strong></h1>
            </div>
                    <Card>
                        <Card.Body>
                            Progja Department
                        </Card.Body>
                    </Card>
                </Container>
            </div>
        );
    }
}

export default ProgjaDepartment;