import React from 'react';
import Card from 'react-bootstrap/Card';
import "./style.css"



export const BrewCard = ({breweries}) => {
    return (
        <div className="brewCard">  

            <Card.Body>

                <Card.Title>
                    <h3>{breweries.name}</h3>
                    <h5>{breweries.brewery_type}</h5>
                </Card.Title>

                <Card.Text>
                    <p>{breweries.street}</p>
                    <a href={breweries.website_url} target='_blank'>{breweries.website_url}</a>
                </Card.Text>
            </Card.Body>

        </div>
    )
}


export default BrewCard;