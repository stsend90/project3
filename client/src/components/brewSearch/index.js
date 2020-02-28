import React from 'react';
import Card from 'react-bootstrap/Card';
import SearchCard from './searchCard';
import BrewCard from './brewCard'

let breweries;
let location;


class ControlledSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            filtered: []
        };

    }

    componentDidMount() {
        this.fetchData();
    }


    fetchData = () => {
        fetch("https://api.openbrewerydb.org/breweries?by_city=tampa")
        .then(res => res.json())
        .then(
            (result) => {
                console.log(result)
            this.setState({
                isLoaded: true,
                filtered: result
            })
            },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            }
        )
    };


    renderBrews = () => {
        const brewItems = this.state.filtered.map(breweries => {
            return (
                <BrewCard
                  key={breweries.id}
                  breweries={breweries}
                  />
            )
        });
        return <Card>{brewItems}</Card>
    }


    render () {
        return(
            this.renderBrews()
        );
    }
}


export default ControlledSearch;