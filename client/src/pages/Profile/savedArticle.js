import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


const SavedArticle = ({article, removeSavedArticles}) => (
        <Card border="dark" style={{ width: '18rem' }}>
            <Card.Body>
            <Card.Img variant="top" src={article.image} />
                <Card.Title>
                    <h3>Title:</h3>
                    <h3><a href={article.url} target='_blank'>{article.title}</a></h3>
                </Card.Title>
                <Button variant="primary" onClick={() => removeSavedArticles(article._id) }>Remove Article</Button>
            </Card.Body>
        </Card>
    )

export default SavedArticle;