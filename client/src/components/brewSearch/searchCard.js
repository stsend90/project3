import React from 'react';
import Card from 'react-bootstrap/Card';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';


export const SearchCard = () =>{
    return(
    <>
    <Card>
        <Card.Header>
            <h3>Search for a brewery near you</h3>
        </Card.Header>
        <Card.Body>
        <InputGroup className="mb-3">
            <FormControl
                placeholder="Enter City Name"
             />
                <InputGroup.Append>
                <Button variant="outline-secondary">Search</Button>
                </InputGroup.Append>
            </InputGroup>
        </Card.Body>

        </Card>
    </>
    )
}

export default SearchCard;