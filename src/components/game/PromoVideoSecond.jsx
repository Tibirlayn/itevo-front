import { Row, Col } from 'react-bootstrap';
import kael from '../../video/kael.mp4'

export function PromoVideoSecond() {
  return (
 <Row className='rounded m-5 '>
      <Row className='my-4'>
        <Col>
          <div className="video-container">
            <video autoPlay loop muted className="full-width-video">
              <source src={kael} type="video/mp4" />
            </video>
          </div>
        </Col>
      </Row>
    </Row>
  );
}

