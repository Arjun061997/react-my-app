import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import card1 from "./Images/card1.jpg"
import card2 from "./Images/card2.jpg"
import card3 from "./Images/card3.jpg"
import card4 from "./Images/card4.jpg"
function Cards() {
  return (
    <div className='bg-secondary text-yellow'>
    <div className='container '>
    <div className='row '>
    <div className="col-md-3">
    <Card style={{ width: '18rem' }} >
      <Card.Img variant="top" src={card1} />
      <Card.Body className="mt-3">
        <Card.Title>Card  title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
    <div className="col-md-3">
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={card2}/>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
    <div className="col-md-3">
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={card3}  />
      <Card.Body>
        <Card.Title >Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
    <div className="col-md-3">
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={card4}height="190px" />
      <Card.Body className="mt-3 ">
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
</div>
</div>
</div>
  );
}

export default Cards; 