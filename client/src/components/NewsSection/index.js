import React from 'react';
import Card from 'react-bootstrap/Card';
import NewsCard from './newsCard';
import { Container } from "../../components/Grid";
import CardDeck from 'react-bootstrap/CardDeck';
import './style.css'
import API from '../../utils/API'
import { ListGroup, Row } from 'react-bootstrap';



class ControlledCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }


  componentDidMount() {
    fetch("https://newsapi.org/v2/everything?" + "q=breweries&" + "sortBy=relevancy&" + "apiKey=b504cfeca75d426188bed3c20f49bf93")
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result.articles)
          this.setState({
            isLoaded: true,
            items: result.articles
          })
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )

  };

  saveArticle = article => {
    console.log(article.title);
    console.log(article.url);
    console.log(article.urlToImage)
    API.saveArticle({
      title: article.title,
      url: article.url,
      image: article.urlToImage
    })
      .then(res => {
        console.log(res)
        console.log("saved")
      })
  }

  renderCard = () => {
    const CardItems = this.state.items.slice(0, 12).map(article => {
      return (
        <NewsCard
          key={article.publishedAt}
          article={article}
          saveArticle={this.saveArticle}
        />
      )
    });
    return (

      <Container fluid>
        <br />
        <h2>Brew News</h2>
        <hr />

        <Row>
          {CardItems}
        </Row>
      </Container>
    )
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>
    } else if (!isLoaded) {
      return <div>Loading...</div>
    } else {
      return (
        this.renderCard()
      );
    }
  }
}

export default ControlledCard;
