import React, { Component } from 'react';
import { Card, Col, Row, ListGroup } from 'react-bootstrap';


export default class DiscussCard extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <>
            <Col>
                <ListGroup className="fluid" horizontal="sm">

                    <ListGroup.Item>
                    
                        <h2>{this.props.username}</h2>
                        <h2>{this.props.title}</h2>
                        <hr />
                        <p>{this.props.body}</p>
                    </ListGroup.Item>

                </ListGroup>
            </Col>
            </>
        )
    }
}