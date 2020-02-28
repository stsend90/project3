import React from 'react';
import Card from 'react-bootstrap/Card';



export const NewsCard = ({article}) => {
    return (
        <>  

            <Card.Body>
                <Card.Img variant="top" src={article.urlToImage} />

                <Card.Title>
                    <h3>{article.title}</h3>
                </Card.Title>

                <Card.Text>
                    <p>{article.description}</p>
                </Card.Text>
            </Card.Body>

        </>
    )
}


export default NewsCard;