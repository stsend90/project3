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
      key: '',
      date: '',
      title: '',
      body: '',
      discussions: [],
    }
  }

  componentDidMount() {
    this.getDiscussionCards();
    console.log(this.props)
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
      })
      .catch(err => console.log("not sent: ", err))
  };

  getDiscussionCards = () => {
    API.getDiscussion()
      .then(res => {
        let myDiscussion = res.data.discussion;
        this.setState({
          discussions: myDiscussion
        })

      })
      .catch(err => console.log(err))
  }

  get postCards() {
    const { discussions } = this.state;
    if (discussions.length > 0) {
      return discussions.map(discussion => <Row key={discussion._id}><Posts getCommentSection={this.props.onClickComment} date={discussion.created} discussion_id={discussion._id} title={discussion.title} body={discussion.body} /></Row>)
    } else {
      return <p>Sorry nothing to display!</p>
    }
  }


  render() {
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

                <label className="exampleFormControlTextarea1"><h3>Post a topic</h3></label>
                <input className="form-control" type="text" placeholder="Title" name="title"
                  placeholder="Title"
                  value={this.state.title}
                  onChange={this.handleInputChange} />
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="body"
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
