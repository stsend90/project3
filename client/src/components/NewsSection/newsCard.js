import React from 'react';
import Card from 'react-bootstrap/Card';




export const NewsCard = ({article}) => {
    return (
        <>  
        
        <Card border="dark" style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Img variant="top" src={article.urlToImage} />

                <Card.Title>
                    <h3><a href={article.url} target='_blank'>{article.title}</a></h3>
                </Card.Title>

                <Card.Text>
                    <p>{article.description}</p>
                </Card.Text>
            </Card.Body>
        </Card>
        </>
    )
}


export default NewsCard;