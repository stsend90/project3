import React, { Component } from 'react';
import { Card, Col, Row, ListGroup } from 'react-bootstrap';


export default class DiscussCard extends Component {

    constructor(props) {
        super(props)
        this.state = { addModalShow: false }
    }

    render() {
        return (
            <>
            <Col>
                <ListGroup className="fluid" horizontal="sm">

                    <ListGroup.Item>
                        <h2>{this.props.title}</h2>
                        <br/>
                        <p>{this.props.body}</p>
                    </ListGroup.Item>

                </ListGroup>
            </Col>
            </>
        )
    }
}