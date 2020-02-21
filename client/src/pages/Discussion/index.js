import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import NavigationBar from "../../components/navbar";


function Discussion({logout}) {
  console.log('here')
  return (
    <Container fluid>
      <NavigationBar logout={logout} />
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1>Discussion</h1>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
}

export default Discussion;
