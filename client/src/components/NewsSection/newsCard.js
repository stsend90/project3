import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'

const NewsCard = ({article, saveArticle}) => (
        <Card border="dark" style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Img variant="top" src={article.urlToImage} />

                <Card.Title>
                    <h3><a href={article.url} target='_blank'>{article.title}</a></h3>
                </Card.Title>

                <Card.Text>
                    <p>{article.description}</p>
                </Card.Text>
                <Button variant="primary" onClick={() => saveArticle(article)}>Save Article</Button>
            </Card.Body>
        </Card>
    )

export default NewsCard;