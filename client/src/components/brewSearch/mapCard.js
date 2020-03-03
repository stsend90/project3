import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import Card from 'react-bootstrap/Card';

const mapStyles = {
    width: '10%',
    height: '10%',
  };


export const MapCard = ({latitude, longatude }) => {
    return (
        <Card.Body>
            <Card.img>
            <Map
                zoom={8}
                style={mapStyles}
                initialCenter={{ lat: 28.005127, lng: -82.459381 }}
            />
            </Card.img>
        
        </Card.Body>
    );
  }


  export default GoogleApiWrapper({
    apiKey: 'AIzaSyA2vOzUZGrXKNJNAdFRRSNsfJeDzh9xNnI'
  })(MapCard);