import React, { Component } from "react";
import { Container, Row } from "../../components/Grid";
import NavigationBar from "../../components/navbar";
import API from "../../utils/API"
import Posts from '../../components/PostCard/Posts'
export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      discussions: []
    })
  }

  componentDidMount() {
    this.getDiscussionCards();
  }

  addComment() {
    // TODO: API call to make comments
  }

  getDiscussionCards = () => {
    API.getDiscussion()
      .then(res => {
        let myDiscussion = res.data.discussion;
        console.log(myDiscussion);

        this.setState({
          discussions: myDiscussion
        })

        console.log(this.state.discussions)
      })
      .catch(err => console.log(err))
  }

  get postCards() {
    const { discussions } = this.state;
    if (discussions.length > 0) {
      return discussions.map(discussion => <Row><Posts date={discussion.created} title={discussion.title} body={discussion.body} /></Row>)
    } else {
      return <p>Sorry, no discussions to display!</p>
    }
  }

  render() {
    return (
      <div>
        <Container fluid>
          <NavigationBar logout={this.props.logout} />
          <br />
          <h1>Hello</h1>
          
        </Container>
      </div>
    );
  }
}
