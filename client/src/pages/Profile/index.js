import React, { Component } from "react";
import { Container, Row, Col } from "../../components/Grid";
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
      key: '',
      date: '',
      title: '',
      body: '',
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

  submit = (event) => {
    event.preventDefault();
    API.submit({
      title: this.state.title,
      body: this.state.body
    })
      .then(res => {
        console.log(res);
        this.getDiscussionCards();
      })
      .catch(err => console.log("not sent: ", err))
      this.setState({
        title: "",
        body: ""
      })
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    })
  };

  getUsername = () => {
    API.findUserName()
      .then(res => {
        this.setState({
          username: res.data.username,
        })
        
      })
      .catch(err => console.log(err))
  }

  getDiscussionCards = () => {
    API.getDiscussion()
      .then(res => {
        let myDiscussion = res.data.discussion;

        this.setState({
          discussions: myDiscussion
        })

      })
      .catch(err => console.log(err))
  }

  get postCards() {
    const { discussions } = this.state;
    if (discussions.length > 0) {
      return discussions.map(discussion => <Row key={discussion._id}><Posts getCommentSection={this.props.onClickComment} date={discussion.created} discussion_id={discussion._id} title={discussion.title} body={discussion.body} /></Row>)
    } else {
      return <p>Sorry nothing to display!</p>
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
