import React, { Component } from 'react';
import { ListGroup } from 'react-bootstrap';



export default class RenderDetail extends Component {

    constructor(props){
        super(props)
    }
    // componentDidMount(){
    //     console.log(this.props);
    // }
    render() {
        return (
            <>
                <ListGroup.Item>
                    <h5>
                        {this.props.date}
                    </h5>
                    <h2>
                        {this.props.title}
                    </h2>

                    <hr />

                    <h4>{this.props.body}</h4>

                </ListGroup.Item>
                <br />
            </>
        )
    }
}