import React, { Component } from 'react';
import { Card, Col, Row, ListGroup, Nav } from 'react-bootstrap';
import { FormBtn } from "../../components/Form";

import { Link } from "react-router-dom";


export default class DiscussCard extends Component {

    constructor(props) {
        super(props)
    }

    // deleteDiscussion(id) {
    //     this.setState((prevState) => ({
    //         discussion: prevState.discussion.filter(item => item.id !== id),
    //     }))
    // };

    

    render() {
        return (
            <>
              
                    <Col size="md-12">
                            <ListGroup.Item>

                                <h5>{this.props.date}: <h2>{this.props.title}</h2></h5>
                                <hr />
                                <h4>{this.props.body}</h4>
                                <Nav.Item>
                                    <FormBtn
                                        text="Comment"
                                        // onClick={}
                                        classes="btn-primary logoutBtn"
                                    />
                                    <> </>
                                    <FormBtn
                                        text="Delete"
                                        // onClick={}
                                        classes="btn-primary logoutBtn"
                                    />
                                </Nav.Item>
                                
                            </ListGroup.Item>
                            <br />

                    </Col>

            </>
        )
    }
}