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
          
        </Container>
      </div>
    );
  }
}
