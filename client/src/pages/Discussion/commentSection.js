import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import NavigationBar from "../../components/navbar";
// import { Comment } from "../Comment/index";
import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class CommentSection extends Component {

    constructor(props) {
        super(props);
        this.state = {
            comment: ''
        }
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addComment();
    }

    // get allComments(){
    //     const { allComments } = this.props;
    //     if(allComments.length > 0){
    //         return allComments.map(comment => <Comment comment={comment} />)
    //     }
    // }



    render() {
        return (
            <div>
                <Container fluid>
                    <NavigationBar logout={this.props.logout} />
            
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
                                <button className="btn-success" onClick={this.onSubmit}>Submit</button>
                            </ListGroup.Item>
                        </Col>
                    </Row>
                    {/* <AddComment /> */}
                </Container>
            </div>


        )
    }
}