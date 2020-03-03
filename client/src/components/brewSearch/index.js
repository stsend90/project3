import React from 'react';
import Card from 'react-bootstrap/Card';
import SearchCard from './searchCard';
import BrewCard from './brewCard';
import MapCard from './mapCard';



class ControlledSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            filtered: [],
            location: "",
            longitude: 0,
            latitude: 0
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({location: event.target.value},
            
            );
      }

    handleSubmit(event) {
        event.preventDefault();
        this.fetchData({
            location: this.state.location.toLocaleLowerCase().trim()
        });
        console.log("clicked")
      }


    fetchData = () => {
        fetch(`https://api.openbrewerydb.org/breweries?by_city=${this.state.location}`)
        .then(res => res.json())
        .then(
            (result) => {
                console.log(result)
                console.log(result[0].longitude)
            this.setState({
                isLoaded: true,
                filtered: result,
                longitude: result.longitude,
                latitude: result.latitude
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

    // renderMaps = () => {
    //     return this.state.filtered.map(map => (
            
    //         <MapCard 
    //             key={map.id}
    //         />

    //     ))
    // }


    renderBrews = () => {
        return this.state.filtered.map(breweries => (
                <Card>
                    <BrewCard
                        key={breweries.id}
                        breweries={breweries}
                    />
                    
                    
                </Card>
            ));
    }


    render () {
        return(
            <div>
                <SearchCard 
                    value={this.state.location}
                    handleChange={this.handleChange}
                    onclick={this.handleSubmit}
                />   
                {this.renderBrews()}
            </div>
        );
    }
}


export default ControlledSearch;