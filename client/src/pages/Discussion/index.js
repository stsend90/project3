import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import NavigationBar from "../../components/navbar";
import { InputGroup, FormControl } from "react-bootstrap"
import API from "../../utils/API"
import Post from "./Post"

export default class Discussion extends Component {

  constructor(props) {
    super(props);
    this.state = {
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
    console.log(this.state)
  };

  submit = (event) => {
    API.submit({
      title: this.state.title,
      body: this.state.body
    })
      .then(res => {
        console.log(res);
        this.getDiscussionCards();
      });
  };

  getDiscussionCards = () => {
    API.getDiscussion()
      .then(res => {
        let myDiscussion = res.data.discussion;
        console.log(myDiscussion);

        this.setState({
          discussions: myDiscussion.map(discussion => <Row><Post title={ discussion.title } body={ discussion.body } /></Row>)
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

            <p>{this.state.discussions}</p>
          </div>
          <Row>
            <Col size="md-12">
              <h2>Welcome to Test Center</h2>
              <form>
                <div class="form-group">
                  <label for="exampleFormControlTextarea1">Post a comment</label>
                  <input class="form-control" type="text" placeholder="Title" name="title"
                    placeholder="Title"
                    value={this.state.title}
                    onChange={this.handleInputChange} />
                  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" name="body"
                    cols="30"
                    rows="10"
                    value={this.state.body}
                    onChange={this.handleInputChange}></textarea>
                </div>
                {/* <div className="form-input">
                  <textarea
                    placeholder="text-area"
                    name="body"
                    cols="30"
                    rows="10"
                    value={this.state.body}
                    onChange={this.handleInputChange}>
                  </textarea>
                </div> */}
                <button className="btn-success" onClick={this.submit}>Submit</button>
              </form>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
