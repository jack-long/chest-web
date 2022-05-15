import { Card, ListGroup } from "react-bootstrap";

function Item({ item }) {
  const { image, category, name, date, description, price } = item;
  // TODO manage item, edit, delete.
  return (
    <Card className="my-3">
      <Card.Header>{category}</Card.Header>
      <Card.Img variant="top" className="rounded" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <ListGroup>
          <ListGroup.Item>price: {price}</ListGroup.Item>
          <ListGroup.Item>date: {date}</ListGroup.Item>
        </ListGroup>
      </Card.Body>
      <Card.Footer>{/* <p>discription</p> */}</Card.Footer>
    </Card>
  );
}

export default Item;
