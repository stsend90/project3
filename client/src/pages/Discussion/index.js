import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import NavigationBar from "../../components/navbar";
import { InputGroup, FormControl, ListGroup } from "react-bootstrap"
import API from "../../utils/API"
import Post from "./Post"
import AddComment from "./AddComment"

export default class Discussion extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      title: '',
      body: '',
      discussions: []
    }
  }

  componentDidMount() {
    this.getDiscussionCards();
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    })
  };

  submit = (event) => {
    event.preventDefault();
    API.submit({
      title: this.state.title,
      body: this.state.body
    })
      .then(res => {
        console.log(res);
        this.getDiscussionCards();
      });
      this.state = {
        title: '',
        body: '',
      }
  };

  getDiscussionCards = () => {
    API.getDiscussion()
      .then(res => {
        let myDiscussion = res.data.discussion;
        console.log(myDiscussion);

        this.setState({
          discussions: myDiscussion.map(discussion => <Row><Post username={discussion.created} title={discussion.title} body={discussion.body} /></Row>)
        })

        console.log(this.state.myDiscussion)
      })
      .catch(err => console.log(err))
  }

  render() {
    console.log("State: ", this.state)
    return (
      <div>
        <Container fluid>
          <NavigationBar logout={this.props.logout} />
          <div className="discussion-post">
            <h3>Comments</h3>
            <div>{this.state.discussions}</div>
          </div>
          <Row>
            <Col size="md-12">
              <ListGroup.Item>

                <label for="exampleFormControlTextarea1">Post a topic</label>
                <input class="form-control" type="text" placeholder="Title" name="title"
                  placeholder="Title"
                  value={this.state.title}
                  onChange={this.handleInputChange} />
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" name="body"
                  cols="30"
                  rows="10"
                  value={this.state.body}
                  onChange={this.handleInputChange}></textarea>
                <button className="btn-success" onClick={this.submit}>Submit</button>
              </ListGroup.Item>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
