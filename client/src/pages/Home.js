import React from "react";
import { FormBtn } from "../components/Form";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import NavigationBar from "../components/navbar";

function Home({logout}) {
  return (
    <Container fluid>
      <NavigationBar />
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1>Welcome to the Home Page</h1>
            <FormBtn
              text="Logout"
              onClick={logout}
              classes="btn-primary logoutBtn"
            />
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
