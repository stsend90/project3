import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import NavigationBar from "../../components/navbar";
import { InputGroup, FormControl, ListGroup } from "react-bootstrap"
import Post from "./Post";
import API from "../../utils/API";



export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      discussions: [],
      username: ""
    })
  }

  componentDidMount() {
    this.getDiscussionCards();
    this.getUsername();
  }


  getUsername = () => {
    API.findUserName()
      .then(res => {
        console.log(res.data)
        this.setState({
          username: res.data.username
        })
        
      })
      .catch(err => console.log(err))
  }

  getDiscussionCards = () => {
    API.getDiscussion()
      .then(res => {
        let myDiscussion = res.data.discussion;
        console.log(myDiscussion);

        this.setState({
          discussions: myDiscussion.map(discussion => <Row><Post date={discussion.created} title={discussion.title} body={discussion.body} /></Row>)
        })

        console.log(this.state.discussion)
      })
      .catch(err => console.log(err))
  }

  // getUserName = () => {
  //   API.login()
  //   .then(res => {
  //     let myName = res.data.user
  //     console.log(myName);
  //     this.setState({
  //       users: myName.map(user => )
  //     })
  //   })
  // }
  
  render(){
    return (
      <div>
        <Container fluid>
          <NavigationBar logout={this.props.logout} />
          <br />
          <h1>{this.state.username}</h1>
          <br />
          {this.state.discussions}
          <br />
        </Container>
      </div>
    );
  }
}
