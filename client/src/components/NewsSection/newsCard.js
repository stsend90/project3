import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from "react-bootstrap/Card"
import Button from 'react-bootstrap/Button'

const NewsCard = ({article, saveArticle}) => (
        <ListGroup border="dark" style={{ width: '18rem', margin: "1rem" }}>
            <Card.Body>
                <Card.Img style={{ width: '14rem', marginBottom: '2rem', }} variant="top" src={article.urlToImage} />
                <Card.Title>
                    <h5>
                        <a href={article.url} target='_blank'>{article.title}</a>
                    </h5>
                </Card.Title>

                <Card.Text>
                    <p>{article.description}</p>
                </Card.Text>
                <Button style={{ width: '7rem' }} variant="primary" onClick={() => saveArticle(article)}>
                    Save Article
                </Button>

            </Card.Body>
        </ListGroup>
    )

export default NewsCard;