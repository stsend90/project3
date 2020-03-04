import React, { Component } from "react";
import { Container, Row } from "../../components/Grid";
import NavigationBar from "../../components/navbar";
import { ListGroup } from "react-bootstrap";
import Posts from '../../components/PostCard/Posts';
import API from "../../utils/API";



export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      discussions: [],
      username: ""
    })
  }

  componentDidMount() {
    this.getDiscussionCards();
    this.getUsername();
  }


  getUsername = () => {
    API.findUserName()
      .then(res => {
        console.log(res.data)
        this.setState({
          username: res.data.username
        })
        
      })
      .catch(err => console.log(err))
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

        console.log(this.state.discussion)
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
          
          <ListGroup.Item>
            <br />
            <h1>{this.state.username}</h1>
            <br />
            {this.postCards}
            <br />
          </ListGroup.Item>
        </Container>
      </div>
    );
  }
}
