import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import NavigationBar from "../../components/navbar";
import Comments from "./Comments"

class Comments extends Component {

    state = {
        title: '',
        body: '',
        comments: []
    }

    componentDidMount() {
        this.getDiscussionCards();
    }

    getDiscussionCards = () => {
        API.getDiscussion()
            .then(res => {
                console.log(res.data);
                let myDiscussion = res.data.discussion;
                this.setState({ discussions: myDiscussion.map(discussion => <Row><Comments title={discussion.title} body={discussion.body} /></Row>) });
            })
            .catch(err => {
                console.error(err);
                return null;
            })
    };

    submit = (event) => {
        API.submit({
            title: this.state.title,
            body: this.state.body
        })
            .then(res => {
                console.log(res);
                this.getDiscussionCards();
            });
    };


    handleInputChange = (event) => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        })
    };

    render() {
        return (
          <div>
            <Container fluid>
              <NavigationBar logout={this.props.logout} />
              <Row>
                <Col size="md-12">
                  <h2>Welcome to Test Center</h2>
                  <form>
                    <div className="form-input">
                      <input 
                        type="text"
                        name="title"
                        placeholder="Title"
                        value={this.state.title}
                        onChange={this.handleInputChange}
                      />
                    </div>
                    <div className="form-input">
                      <label text="comment"></label>
                      <textarea 
                        placeholder="text-area" 
                        name="body" 
                        type="text" 
                        rows="4" 
                        value={this.state.body} 
                        onChange={this.handleInputChange}>   
                      </textarea>
                    </div>
                    <button className="btn-success"  onClick={this.submit}>Submit</button>
                  </form>
                </Col>
              </Row>
              <div className="discussion-post">
            <h3>Comments</h3>

            {this.state.discussions}
          </div>
        </Container>
      </div>
    );
  }
}

    export default Comments;
