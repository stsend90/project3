import React from 'react';
import Card from 'react-bootstrap/Card';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { Input } from '../Form';


export const SearchCard = ({ location, handleChange, onclick }) => {
    return (
        <>
            <Card>
                <Card.Header style={{ backgroundColor: "#343a40", color: "white" }}>
                    <h3>Search for a brewery near you</h3>
                </Card.Header>
                <Card.Body className="searchBody">
                    <form>
                        <InputGroup className="mb-3">
                            <Input
                                type="text"
                                placeholder="Enter City Name"
                                value={location}
                                onChange={handleChange}
                            />

                            <InputGroup.Append>
                                <Button onClick={onclick} variant="outline-primary" type="submit">Search</Button>
                            </InputGroup.Append>
                        </InputGroup>
                    </form>
                </Card.Body>

            </Card>
        </>
    )
}

export default SearchCard;