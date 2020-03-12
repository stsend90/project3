import React, { Component } from "react";
import { Container } from "../../components/Grid";
import NavigationBar from "../../components/navbar";
import ControlledCard from "../../components/NewsSection/index";
import "./style.css";

function BrewCard({logout}) {
    console.log('here')
    return (
      <Container fluid>
        <NavigationBar logout={logout} />
        <div className="newsContainer">
          <ControlledCard />
        </div>


      </Container>
    );
  }
  
  export default BrewCard;