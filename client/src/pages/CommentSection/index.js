import React, { Component } from "react";
import { Container, Row, Col } from "../../components/Grid";
import NavigationBar from "../../components/navbar";
import { ListGroup } from "react-bootstrap";
import API from "../../utils/API";
import RenderDetails from "../../components/discussionDetail/discussionDetail";

export default class CommentSection extends Component {

  constructor(props) {
    super(props);

    this.state = {
      key: "",
      date: "",
      body: "",
      comments: [],
    }
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    })
  };

  addComment = (id) => {
    id.preventDefault();
    API.addComment({
      body: this.state.body
    })
    .then(res => {
      console.log(res)
    })
    .catch(err => console.log(err))
    this.setState({
      body: ""
    })
  }

  // getComments = () => {
  //   API.getComments()
  //   .then(res => {
  //     let allComments = res.data
  //       this.setState({
  //         comments: allComments
  //       })
  //     console.log(allComments)
  //   })
  //   .catch(err => {
  //     console.log(err)
  //   })
  // }



  get postSingle() {
    const { post } = this.props;
    if (post) {
      return <RenderDetails key={post._id} discussion_id={post._id} date={post.created} title={post.title} body={post.body} />
    } else {
      return <p>Sorry nothing to display!</p>
    }
  }

  render() {

    return (
      <>
        <Container fluid>
          <NavigationBar logout={this.props.logout} />
          <br />
          <ListGroup.Item>
          
            {this.postSingle}

          </ListGroup.Item>
          <br />
          <ListGroup.Item>
          
            {this.getComments}

          </ListGroup.Item>
          <Row>


            <Col size="md-12">
              <ListGroup.Item>

                <label className="exampleFormControlTextarea1"><h4>Post a Comment</h4></label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="body"
                  cols="30"
                  rows="10"
                  value={this.state.body}
                  onChange={this.handleInputChange}></textarea>
                <button className="btn-success" onClick={this.addComment}>Submit</button>
              </ListGroup.Item>
            </Col>
          </Row>
        </Container>
      </>
    )
  }
}
