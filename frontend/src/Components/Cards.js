import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

function Cards(prop) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src={`https://source.unsplash.com/random/cars${prop.val}`}
      />
      <Card.Body>
        <Card.Title>Lamborgini</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Cards;
