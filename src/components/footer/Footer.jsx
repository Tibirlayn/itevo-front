import { Row, Col } from 'react-bootstrap';
import logo from '../../img/logo.png';

export function Footer() {
  return (
    <Row className='custom-bg-black rounded my-5 p-4'>
        <Row >
            <Col className='d-flex align-items-center justify-content-center'>
                <img
                alt=""
                src={logo}
                width="80"
                height="80"
                className="d-inline-block align-top"
                />{' '}
                <h1><span className="text-light mx-2">ITEVO</span></h1>
            </Col>
        </Row>
    </Row>
  );
}