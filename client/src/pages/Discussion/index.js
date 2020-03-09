import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import NavigationBar from "../../components/navbar";
import { ListGroup } from "react-bootstrap";
import API from "../../utils/API";
import Posts from '../../components/PostCard/Posts';
import RenderDetail from "../../components/discussionDetail/discussionDetail"

export default class Discussion extends Component {

  constructor(props) {
    super(props);
    this.state = {
      key: '',
      username: [],
      discussions: [],
    }
  }

  componentDidMount() {
    this.getDiscussions();
    this.renderDiscussions();
  }

  getDiscussions = () => {
    API.getDiscussions()
      .then(res => {
        let allDiscussions = res.data
        this.setState({
          discussions: allDiscussions
        })
        console.log(allDiscussions)
      })
      .catch(err => console.log(err))
  }

  renderDiscussions = () => {
    const { discussions } = this.state;
    if (discussions.length > 0) {
      return discussions.map(discussion => <Row key={discussion._id}><RenderDetail getCommentSection={this.props.onClickComment} date={discussion.created} title={discussion.title} body={discussion.body} /></Row>)
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
            {this.renderDiscussions()}
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
