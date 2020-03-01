import React, { Component } from "react";
import { Col, Row, Container} from "../../components/Grid";
import NavigationBar from "../../components/navbar";
import API from "../../utils/API"
import Profile from "./Profile";

class Discussion extends Component {

  state = {
    title: '',
    body: '',
    discussions: []
  }

  componentDidMount() {
    this.getDiscussionCards();
  }

  getDiscussionCards = () => {
    API.getDiscussion()
      .then(res => {
        console.log(res.data);
        let myDiscussion = res.data.discussion;
        this.setState({ discussions: myDiscussion.map(discussion => <Row><Profile title={ discussion.title } body={ discussion.body } /></Row>) });
      })
      .catch(err => {
        console.error(err);
        return null;
      })
  };

  render() {
    return (
      <div>
        <Container fluid>
          <NavigationBar logout={this.props.logout} />
               
          <div className="discussion-post">
          <h3>Welcome {this.props.user}</h3>

            {this.state.discussions}
          </div>
        </Container>
      </div>
    );
  }
}

export default Discussion;
