import React, { Component } from 'react';
import { ListGroup, Nav } from 'react-bootstrap';
import { FormBtn } from "../Form";
import { Link } from "react-router-dom";

export default class PostCard extends Component {


    constructor(props){
        super(props)
    }

    onClickComment(){
        this.props.getCommentSection(this.props.discussion_id)
    }

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

                    <Nav.Item>
                        <Link to={`/discussion/${this.props.discussion_id}`}>
                            <FormBtn
                                text="Comment"
                                classes="btn-primary logoutBtn"
                                onClick={() => {
                                    this.onClickComment()
                                }}                           
                            />
                        </Link>
                        <> </>
                        <FormBtn
                            text="Delete"
                            classes="btn-primary logoutBtn"
                            // onClick={() => {
                            // }} 
                        />
                    </Nav.Item>

                </ListGroup.Item>
                <br />
            </>
        )
    }
}