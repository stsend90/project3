import React from 'react';
import Card from 'react-bootstrap/Card';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import ControlledSearch from './index';
import { Input } from '../Form';


export const SearchCard = ({location, handleChange, onclick}) =>{
    return(
    <>
    <Card>
        <Card.Header>
            <h3>Search for a brewery near you</h3>
        </Card.Header>
        <Card.Body>
        <form>
            <InputGroup className="mb-3">
                <Input 
                    type="text"
                    placeholder="Enter City Name"
                    value={location}
                    onChange={handleChange}
                />
                
                    <InputGroup.Append>
                    <Button onClick={onclick} variant="outline-secondary" type="submit">Search</Button>
                    </InputGroup.Append>
                </InputGroup>
                </form>
        </Card.Body>

        </Card>
    </>
    )
}

export default SearchCard;