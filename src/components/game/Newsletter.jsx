import { Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export function Newsletter() {
  return (
    <Row className='rounded my-5 p-4'>
        <Row>
            <Col className="text-center text-light mb-5">
                <h1 className='pt-5'><strong>NEWSLETTER</strong></h1>
                <h3 className='pt-4'><strong>Sign up to receive updates on new <br/>
                    games and special offers</strong></h3>
            </Col>
        </Row>
        <Row className='mt-4 mb-5 pb-5 justify-content-center'>
            <Col xs={12} md={6} lg={5} xl={4} xxl={3} className="d-flex flex-column  align-items-center p-2" style={{ backgroundColor: 'white', border: '1px solid #ccc',  borderRadius: '10px' }}>
                <Form.Control size="lg" type="text" placeholder="Email Input" style={{ width: '100%', border: 'none', outline: 'none', boxShadow: 'none'}} />
                <Button variant="dark" size="lg" className="custom-dark-button" style={{ width: '100%' }}><h4>Submit</h4></Button>
            </Col>
        </Row>
    </Row>
  );
}
