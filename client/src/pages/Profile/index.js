import React, { Component } from "react";
import { Container, Row } from "../../components/Grid";
import NavigationBar from "../../components/navbar";
import { ListGroup, Card, CardDeck } from "react-bootstrap";
import Posts from '../../components/PostCard/Posts';
import API from "../../utils/API";
import NewsCard from '../../components/NewsSection/newsCard'
import './style.css'
import SavedArticle from "./savedArticle";



export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      discussions: [],
      username: "",
      articles: []
    })
  }

  componentDidMount() {
    this.getDiscussionCards();
    this.getUsername();
    this.getSavedArticles();
    this.renderArticle();
  }


  getUsername = () => {
    API.findUserName()
      .then(res => {
        console.log(res.data)
        this.setState({
          username: res.data.username,
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

  getSavedArticles = ()  => {
    API.savedArticles()
      .then(res => {
        console.log(res.data.article)
        this.setState({
          articles: res.data.article
        })
      })
      .catch(err => console.log(err))
  }

  renderArticle = () => {
    const articleItems = this.state.articles.map(articles => {
      return (
        <SavedArticle
          key={articles._id}
          article={articles}
        />
      )
    });
    return (
      <Card className="newsContainer">
        <Card.Header id="newsHeader" as="h2">Your saved articles</Card.Header>
        <CardDeck>{articleItems}</CardDeck>
    
      </Card>
    )
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
            {this.renderArticle()}
          </ListGroup.Item>
        </Container>
      </div>
    );
  }
}
