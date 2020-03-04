import React, { Component } from "react";
import { Container, Row } from "../../components/Grid";
import NavigationBar from "../../components/navbar";
<<<<<<< HEAD
import API from "../../utils/API"
import Posts from '../../components/PostCard/Posts'
=======
import { InputGroup, FormControl, ListGroup } from "react-bootstrap"
import Post from "./Post";
import API from "../../utils/API";



>>>>>>> 1872154d252773552ce9cc00eb6427c136370a9b
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

<<<<<<< HEAD
        console.log(this.state.discussions)
=======
        console.log(this.state.discussion)
>>>>>>> 1872154d252773552ce9cc00eb6427c136370a9b
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
<<<<<<< HEAD
          <h1>Hello</h1>
          
=======
          <h1>{this.state.username}</h1>
          <br />
          {this.state.discussions}
          <br />
>>>>>>> 1872154d252773552ce9cc00eb6427c136370a9b
        </Container>
      </div>
    );
  }
}
