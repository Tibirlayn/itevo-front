import { Row, Col } from 'react-bootstrap';
import czern from '../../video/czern.mp4'

export function PromoVideoFirst() {
  return (
 <Row className='rounded m-5'>
      <Row className='my-4'>
        <Col>
          <div className="video-container">
            <video autoPlay loop muted className="full-width-video">
              <source src={czern} type="video/mp4" />
            </video>
          </div>
        </Col>
      </Row>
    </Row>
  );
}

