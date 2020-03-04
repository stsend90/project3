import React, { Component } from "react";
import { Container, Row, Col } from "../../components/Grid";
import NavigationBar from "../../components/navbar";
import { ListGroup } from "react-bootstrap";
import Posts from '../../components/PostCard/Posts';
import API from "../../utils/API";

export default class CommentSection extends Component {

  constructor(props) {
    super(props);
    this.state = {
      body: "",
      comments: []
    }
  }

  // componentDidMount() {
  //   this.getOneDiscussion();
  // }

  handleInputChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    })
  };



  // getOneDiscussion = () => {
  //   API.getOneDiscussion()
  //   .then(res => {
  //     let oneDiscussion = res.data.discussion;
  //     console.log(oneDiscussion)
  //     this.setState({
  //       discussions: oneDiscussion
  //     })

  //     console.log(this.state.discussions)
  //   })
  //   .catch(err => console.log(err))
  // }

  // get postSingle() {
  //   const { discussions } = this.state;
  //   if (discussions.length > 0) {
  //     return discussions.map(discussion => <Row><Posts date={discussion.created} title={discussion.title} body={discussion.body} /></Row>)
  //   } else {
  //     return <p>Sorry nothing to display!</p>
  //   }
  // }

  // addComment = async (discussions_id, comments) => {
  //   //TODO: API call to add comment
  //   let resp = {};
  //   try {
  //     resp = await API.addComment(discussions_id, comments);
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

        <ListGroup.Item>
          <h1>Hello World!</h1>
          {this.postSingle}
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
