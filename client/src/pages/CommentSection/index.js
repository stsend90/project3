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
      key: '',
      date: '',
      body: '',
      discussions: "",
    }
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    })
  };



  get postSingle() {
    const { post } = this.props;
    // console.log(this.state)
    if (post) {
      return <RenderDetails key={post._id} discussion_id={post._id} date={post.created} title={post.title} body={post.body} />
    } else {
      return <p>Sorry nothing to display!</p>
    }
  }

  // addComment = async (discussions, comments) => {
  //   //TODO: API call to add comment
  //   let resp = {};
  //   try {
  //     resp = await API.addComment({
  //       body: this.state.body
  //     });
  //   } catch (error) {
  //     resp = error
  //     alert("There was an error submitting your comment :(")
  //     console.error(resp);
  //   }

  //   if (resp.status === 200) {
  //     alert("Sucess! Your comment was submitted :)")
  //   }
  // }

  render() {


    return (
      <>
        <Container fluid>
          <NavigationBar logout={this.props.logout} />
          <br />
          <ListGroup.Item>
            <h1>Hello</h1>
            <hr />
            {this.postSingle}

          </ListGroup.Item>
          <br />
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
