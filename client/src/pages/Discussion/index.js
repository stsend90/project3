import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import NavigationBar from "../../components/navbar";
import { ListGroup } from "react-bootstrap";
import API from "../../utils/API";
import Posts from '../../components/PostCard/Posts';

export default class Discussion extends Component {

  constructor(props) {
    super(props);
    this.state = {
      date: '',
      title: '',
      body: '',
      discussions: [],
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
  };

  addComment = async (discussion_id, comment) => {
    //TODO: API call to add comment
    let resp = {};
    try {
      resp = await API.addComment(discussion_id, comment);
    } catch (error) {
      resp = error
      alert("There was an error submitting your comment :(")
      console.error(resp);
    }

    if (resp.status === 200) {
      alert("Sucess! Your comment was submitted :)")
    }
  }

  getDiscussionCards = () => {
    API.getDiscussion()
      .then(res => {
        let myDiscussion = res.data.discussion;
        console.log(myDiscussion);

        this.setState({
          discussions: myDiscussion
        })

        console.log(this.state.myDiscussion)
      })
      .catch(err => console.log(err))
  }

  get postCards() {
    const { discussions } = this.state;
    if (discussions.length > 0) {
      return discussions.map(discussion => <Row><Posts date={discussion.created} title={discussion.title} body={discussion.body} /></Row>)
    } else {
      return <p>Sorry nothing to display!</p>
    }
  }


  render() {
    console.log("State: ", this.state)
    return (
      <div>
        <Container fluid>
          <NavigationBar logout={this.props.logout} />

          <ListGroup.Item>
            <br />
            <h1>History</h1>
            <br />
            {this.postCards}
            <br />
          </ListGroup.Item>

          <Row>


            <Col size="md-12">
              <ListGroup.Item>

                <label for="exampleFormControlTextarea1"><h3>Post a topic</h3></label>
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
