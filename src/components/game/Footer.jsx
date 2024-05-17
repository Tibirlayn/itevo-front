import { Row, Col } from 'react-bootstrap';
import logo from '../../img/logo.png';

export function Footer() {
  return (
    <Row className='custom-bg-black rounded my-5 p-4'>
        <Row className='my-5'>
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
            <Col className="text-light">
                <Col>GAME</Col>
                <hr  className='mt-0 pb-4' />
                <Col>ACTION</Col>
                <Col>ARCADE</Col>
                <Col>PLATFORMERS</Col>
                <Col>FIGHTINGS</Col>
                <Col>MMORPG</Col>
            </Col>
            <Col className="text-light">
                <Col>STORE</Col>
                <hr  className='mt-0 pb-4' />
                <Col>GAME ITEMS</Col>
                <Col>GAME PRICE</Col>
                <Col>DISCOUNT</Col>
            </Col>
            <Col className="text-light">
                <Col>POLICY</Col>
                <hr  className='mt-0 pb-4' />
                <Col>ABOUT US</Col>
                <Col>SITE RULES</Col>
            </Col>
        </Row>
    </Row>
  );
}




