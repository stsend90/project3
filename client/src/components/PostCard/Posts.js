import React, { Component } from 'react';
import { ListGroup, Nav } from 'react-bootstrap';
import { FormBtn } from "../Form";

import { Link } from "react-router-dom";
import commentSection from "../../pages/Discussion/commentSection"


export default class PostCard extends Component {

    constructor(props) {
        super(props)
    }
    

    render() {
        return (
            <>
                <ListGroup.Item>
                    <h5>
                        {this.props.date}
                         : 
                        <h2>
                            {this.props.title}
                        </h2>
                    </h5>

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
            </>
        )
    }
}