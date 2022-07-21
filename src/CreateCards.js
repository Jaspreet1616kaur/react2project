import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function CreateCards({ country }) {
  const { flag, name } = country;
  console.log("name: ", name);
  console.log("country: ", country);
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={flag} />
      <Card.Body>
        <Card.Title>
          <h2>{name}</h2>
        </Card.Title>
        <Card.Text>
          {/* {" "}
          <h2> {capital} </h2>{" "} */}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default CreateCards;
