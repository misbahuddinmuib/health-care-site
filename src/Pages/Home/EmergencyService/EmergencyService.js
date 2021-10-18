import React from 'react';
import { Button, Card, Row } from 'react-bootstrap';
import emergency1 from '../../../images/emergency/1.jpeg';
import emergency2 from '../../../images/emergency/2.jpeg';
import emergency3 from '../../../images/emergency/3.jpeg';
import emergency4 from '../../../images/emergency/4.jpeg';
import emergency5 from '../../../images/emergency/5.jpeg';
import './EmergencyService.css';


const EmergencyService = () => {
    return (
        
  <div>
      <div> 
          <h2 className="text-primary my-3">
          FAST, EASY AND RELIABLE
          </h2>
          
           </div>
      <Row xs={1} md={2} lg={3}  className="g-4 gap-3 ms-5">
  <Card  style={{ width: '25rem' }}>
  <Card.Img variant="top" src={emergency1} />
  <Card.Body>
    <Card.Title>Order Ambulance</Card.Title>
    <Card.Text>
    To confirm an ambulance booking, please fill up the e-form. We will get back soon to you.
    </Card.Text>
    <h4 className="text-danger">Call</h4>
    <Button variant="warning">01758487784</Button>
  </Card.Body>
</Card>

<Card  style={{ width: '25rem' }}>
  <Card.Img variant="top" src={emergency2} />
  <Card.Body>
    <Card.Title>Home Sample Collection</Card.Title>
    <Card.Text>
    To confirm an ambulance booking, please fill up the e-form. We will get back soon to you.
    </Card.Text>
    <h4 className="text-danger">Call</h4>
    <Button variant="warning">01758487784</Button>
  </Card.Body>
</Card>

<Card style={{ width: '25rem' }}>
  <Card.Img variant="top" src={emergency3} />
  <Card.Body>
    <Card.Title>Nursing for Home</Card.Title>
    <Card.Text>
    To confirm an ambulance booking, please fill up the e-form. We will get back soon to you.
    </Card.Text>
    <h4 className="text-danger">Call</h4>
    <Button variant="warning">01758487784</Button>
  </Card.Body>
</Card>
<Card style={{ width: '25rem' }}>
  <Card.Img variant="top" src={emergency4} />
  <Card.Body>
    <Card.Title>Oxygen for Home</Card.Title>
    <Card.Text>
    To confirm an ambulance booking, please fill up the e-form. We will get back soon to you.
    </Card.Text>
    <h4 className="text-danger">Call</h4>
    <Button variant="warning">01758487784</Button>
  </Card.Body>
</Card>
<Card style={{ width: '25rem' }}>
  <Card.Img variant="top" src={emergency5} />
  <Card.Body>
    <Card.Title>Medicine Supply</Card.Title>
    <Card.Text>
    To confirm an ambulance booking, please fill up the e-form. We will get back soon to you.
    </Card.Text>
    <h4 className="text-danger">Call</h4>
    <Button variant="warning">01758487784</Button>
  </Card.Body>
</Card>
 
    
 
</Row>
  </div>
    );
};

export default EmergencyService;