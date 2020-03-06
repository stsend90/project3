import React from 'react';
import Card from 'react-bootstrap/Card';


const SavedArticle = ({article}) => (
        <Card border="dark" style={{ width: '18rem' }}>
            <Card.Body>

                <Card.Title>
                    <h3><a href={article.url} target='_blank'>{article.title}</a></h3>
                </Card.Title>
            </Card.Body>
        </Card>
    )

export default SavedArticle;