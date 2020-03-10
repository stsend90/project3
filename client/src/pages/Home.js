import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import NavigationBar from "../components/navbar";
import ControlledCard from "../components/NewsSection/index";
import NewsCard from "../components/NewsSection/newsCard";
import ControlledSearch from "../components/brewSearch/index";
import SearchCard from "../components/brewSearch/searchCard";

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
          <ControlledCard />
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
