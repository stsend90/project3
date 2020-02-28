import React from 'react';
import Card from 'react-bootstrap/Card';
import SearchCard from './searchCard';

class ControlledSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filtered: []
        };

    }









    renderCard= () => {
        return (
            <SearchCard
            />
        )
    }
}


export default ControlledSearch;