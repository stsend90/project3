import React, { Component } from 'react';
import { ListGroup, Nav } from 'react-bootstrap';
import { FormBtn } from "../Form";
import API from "../../utils/API"
import { Link } from "react-router-dom";


export default class PostCard extends Component {

    constructor(props) {
        super(props)
    }

    // componentDidMount() {
    //     this.deleteDiscussion();
    // }

    // deleteDiscussion = (id) => {
    //     event.preventDefault();
    //     API.deleteDiscussion(id)
    //       .then(res => this.getDiscussionCards())
    //       .catch(err => console.log(err));
    // };


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
                        <Link to="/discussion/:id">
                            <FormBtn
                                text="Comment"
                                // onClick={() => {
                                
                                // }}                                classes="btn-primary logoutBtn"
                            />
                        </Link>
                        <> </>
                        <FormBtn
                            text="Delete"
                            // onClick={() => {
                                
                            // }}
                            classes="btn-primary logoutBtn"
                        />
                    </Nav.Item>

                </ListGroup.Item>
                <br />
            </>
        )
    }
}