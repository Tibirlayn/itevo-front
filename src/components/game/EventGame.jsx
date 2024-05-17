import { Card, Row, Col } from 'react-bootstrap';
import CardFirst from '../../img/CardFirst.jpg'
import CardSecond from '../../img/CardSecond.jpeg'
import CardThird from '../../img/CardThird.png'

export function EventGame() {
  // Предположим, у вас есть массив данных для карточек
  const cardsData = [
    { title: 'R2Online', text: 'Some text for card 1', image:CardFirst },
    { title: 'Card 2', text: 'Some text for card 2', image:CardSecond },
    { title: 'Card 3', text: 'Some text for card 3', image:CardThird },
    // Дополнительные данные для карточек
  ];

  return (
    <Row className='rounded custom-bg-gray m-5 p-4'> {/* Указываем количество колонок для разных размеров экрана */}
    <Row >
      <Col className="text-light ">
        <h2><strong>EVENT</strong></h2>
      </Col>
    </Row>
    <Row className='my-4' xs={1} md={1} lg={3}>
      {cardsData.map((card, index) => (
        <Col key={index}>
          <Card style={{ backgroundColor: 'transparent', border: 'none'}} >
          <div style={{ height: '600px', overflow: 'hidden' }}>
            <Card.Img variant="top" src={card.image} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
          </div>
          <div class="card-overlay"> {/* Container for overlay */}
            <Card.ImgOverlay className="d-flex flex-column justify-content-end align-items-center">
              <Card.Title className="text-center text-light mb-0"><h4>{card.title}</h4></Card.Title>
            </Card.ImgOverlay>
          </div>
          </Card>
        </Col>
      ))}
      </Row>
    </Row>
  );
}

