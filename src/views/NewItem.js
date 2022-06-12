import { useState } from "react";
import { Button, Card, Form, ListGroup } from "react-bootstrap";

export default function NewItem() {
  //   const { image, category, name, date, description, price } = item;
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("image", image);
    data.append("description", description);

    fetch("/item/new", {
      method: "POST",
      body: data,
    }).then((r) => {
      if (r.status === 200) {
        alert("OK");
      } else {
        r.text().then((t) => alert(t));
      }
    });
  };

  const handleImage = (e) => {
    console.debug(e.target);
    console.debug(e.target.files[0]);
    setImage(e.target.files[0]);
  };

  return (
    <Card className="my-3">
      <Card.Header>New</Card.Header>
      {image ? <Card.Img variant="top" className="rounded" src={URL.createObjectURL(image)} alt="photo" /> : ""}
      <Card.Body>
        <Form>
          <Form.Control type="file" name="image" accept="image/*" onChange={handleImage} />
          <Form.Control
            type="text"
            placeholder="description"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <Button onClick={handleSubmit}>Submit</Button>
        </Form>
      </Card.Body>
      <Card.Footer>{/* <p>discription</p> */}</Card.Footer>
    </Card>
  );
}
