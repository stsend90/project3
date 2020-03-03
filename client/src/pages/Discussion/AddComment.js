import React, { Component } from "react";
import axios from "axios";
import { Col, Row, Container } from "../../components/Grid";
import NavigationBar from "../../components/navbar";
import API from "../../utils/API"
import Post from "./Post"
import { InputGroup, FormControl, ListGroup } from "react-bootstrap"
import { Link } from "react-router-dom";

export default class Comment extends Component {

    constructor(props) {
        super(props);
        this.state = {
            comments: ""
        }
    }

    componentDidMount() {
        this.addComment();
    }

    addComment() {

    }

    render() {



        return (
            <div>
                <Container fluid>
                    <NavigationBar logout={this.props.logout} />
                    <Row>
                        <div className="discussion-post">
                            <h3>Comments</h3>
                            <div>{this.state.discussions}</div>
                        </div>
                    </Row>
                    
                    <Row>
                        <Col size="md-12">
                            <ListGroup.Item>

                                <label for="exampleFormControlTextarea1">Post a comment</label>
                                <input class="form-control" type="text" placeholder="Title" name="title"
                                    placeholder="Title"
                                    value={this.state.title}
                                    onChange={this.handleInputChange} />
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" name="body"
                                    cols="30"
                                    rows="10"
                                    value={this.state.body}
                                    onChange={this.handleInputChange}></textarea>
                                <button className="btn-success" onClick={this.submit}>Submit</button>
                            </ListGroup.Item>
                        </Col>
                    </Row>
                </Container>
            </div>


        )
    }
}