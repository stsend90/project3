import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import NavigationBar from "../components/navbar";
import ControlledSearch from "../components/brewSearch/index";

function Home({logout}) {
  console.log('here')
  return (
    <Container fluid>
      <NavigationBar logout={logout} />
      <Row>
        <Col size="md-12">
          <Jumbotron>
    
          </Jumbotron>
          <ControlledSearch />
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
