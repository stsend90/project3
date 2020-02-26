import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import NavigationBar from "../../components/navbar";
import API from "../../utils/API"


export default class Discussion extends Component{

  constructor(props){
    super(props);
    this.state = {
      title: '',
      body: ''
    }
  }

  handleInputChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value.trim()
    });
  };

  render(){
    console.log("State: ", this.state)
    return (
      <>
      <div>
        <Container fluid>
      <NavigationBar logout={this.props.logout} />
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1>Welcome to the Home Page</h1>
            <h2>Welcome to Test Center</h2>
          <form>
            <div className="form-input">
              <input 
                type="text"
                name="title"
                placeholder="Title"
                value={this.state.title}
                onChange={this.handleInputChange}
              />
            </div>
            <div className="form-input">
              <textarea 
                placeholder="text-area" 
                name="body" 
                cols="30" 
                rows="10" 
                value={this.state.body} 
                onChange={this.handleInputChange}></textarea>
            </div>
            <button className="btn-success">Submit</button>

          </form>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
      </div>
      </>
    );
  }
}
