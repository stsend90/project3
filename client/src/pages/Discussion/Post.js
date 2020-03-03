import React, { Component } from 'react';
import { Card, Col, Row, ListGroup, Nav } from 'react-bootstrap';
import { FormBtn } from "../../components/Form";

import { Link } from "react-router-dom";
import addComment from "./AddComment"


export default class DiscussCard extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <>
                <Col>
                    <ListGroup className="fluid">

                        <ListGroup.Item>

                            <h5>{this.props.username}: <h2>{this.props.title}</h2></h5>
                            <hr />
                            <h4>{this.props.body}</h4>
                            <Nav.Item>
                                <Link></Link><FormBtn
                                    text="Comment"
                                    // onClick={}
                                    classes="btn-primary logoutBtn"
                                /> />
                                <FormBtn
                                    text="Delete"
                                    // onClick={}
                                    classes="btn-primary logoutBtn"
                                />
                            </Nav.Item>
                        </ListGroup.Item>

                    </ListGroup>
                </Col>
            </>
        )
    }
}