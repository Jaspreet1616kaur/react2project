import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link, useNavigate } from "react-router-dom";
import { Col } from "react-bootstrap";
// import Search from "./Search";
function CreateCards({ country }) {
  const { flag, name } = country;
  // let navigate = useNavigate();
  // const showMore = () => {
  //   navigate("../countrys/${name}");
  // };

  return (
    <Col>
      <Card>
        <Card.Img variant="top" src={flag} />
        <Card.Body>
          <Card.Title>
            <h2>{name}</h2>
          </Card.Title>
          <Card.Text>{/* <h2> {capital} </h2> */}</Card.Text>
          {/* <Button onClick={showMore} variant="primary">
          show info
        </Button> */}
          <Link to={`${name}`}>
            <Button variant="primary">show more</Button>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default CreateCards;
