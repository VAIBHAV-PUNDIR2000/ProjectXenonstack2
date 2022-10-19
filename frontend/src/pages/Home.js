import React from "react";
import { Container, Row } from "react-bootstrap";
import Cards from "../Components/Cards";
const Home = () => {
  var carNames = ["Lamborgini", "Mercedes", "BMW", "Honda"];
  return (
    <Container className="pt-5">
      <Row>
        {carNames.map((i) => {
          return <Cards props={i}></Cards>;
        })}
      </Row>
    </Container>
  );
};

export default Home;
