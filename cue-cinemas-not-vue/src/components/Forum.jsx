// imports

import axios from "axios";
import { useState, useEffect } from "react";
import { Card, Container, Row, Col, Button } from "react-bootstrap";
import ForumComments from "./ForumComments";

const Forum = () => {

    // states, declaring variables and use effects

    const [commentData, setCommentData] = useState([]);

    const [newComment, setNewComment] = useState({})

    let commentObj = {
        userName: "",
        emailAddress: "",
        filmName: "",
        filmRating: 0,
        message: ""
    }

    // How do we deal with data that takes a while to load?
    // We want the user to know data is loading, otherwise they think its broken
    const [loaded, setLoaded] = useState(false); // at run time the data is not loaded

    // How do we deal with data when there is an error?
    const [error, setError] = useState(null); // at run time there is no error

    const createNewComment = () => {

        axios.post(`http://localhost:4494/discussion/create`, newComment)
            .then((response) => {

                console.log(response)

            })
            .catch((error) => {

                console.log(error)

            })

    }

    useEffect(() => {
        // axios is a simple asynchronous HTTP request library we install with npm i axios
        // To do a get request axios.get('url to get from')
        axios.get(`http://localhost:4494/discussion/getAll`) // Sending a get request to the server

            // .then() - used for async code, do the method above, when it has returned something
            // put the return into this method and run
            .then((response) => {
                // Take what axios returns, call it 'response' and print it out

                setCommentData(response.data); // An array of objects stored as state

                setLoaded(true); // if there is a response, loaded = true
            }).catch((error) => {
                // If an error is thrown, pass it in here and deal with it
                setLoaded(true);
                setError(error);
            });

    }, []); // everytime the state 'amount' is updated the useEffect runs again


    // Make if else statements to determine what our react app should return
    if (error) { // If there is an error or if error is not null (undefined)
        return <p> Oops, there has been an error D: {error.message}</p>
    } else if (!loaded) {  // if loaded is false
        return <p> Please wait, data is loading :)</p>
    } else {



        return (
            <div>
                <p> Welcome to the CueNotVue Forum </p>

                <div>
                    <Container className="ContainerClass">
                        <Row>
                            <Col>
                                <Card className="forumCard" style={{ width: '40rem' }}>
                                    <Card.Body>
                                        <Card.Title className="commentName">
                                            <input type="text" placeholder="Enter your name" onChange={(e) => commentObj.userName = e.target.value} />
                                        </Card.Title>
                                        <Card.Subtitle className="commentFilm">
                                            <input type="email" placeholder="Enter your email" onChange={(e) => commentObj.emailAddress = e.target.value} />
                                        </Card.Subtitle>
                                        <Card.Text className="commentRating">
                                            <input type="text" placeholder="Which film are did you watch" onChange={(e) => commentObj.filmName = e.target.value} />
                                        </Card.Text>
                                        <Card.Text className="commentRating">
                                            <input type="number" placeholder="Rate the film from 1 - 10" onChange={(e) => commentObj.userName = e.target.value} />
                                        </Card.Text>
                                        <Card.Text>
                                            <input type="text" placeholder="Write your comment here" onChange={(e) => commentObj.message = e.target.value} />
                                        </Card.Text>
                                        <Button variant="primary" onClick={createNewComment}>
                                            Post Comment
                                        </Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>

                    </Container>
                </div>

                <br /><br /><br /><br /><br /><br /><br /><br />





                {/* Add input fields here with submit button, which then adds object containing the data in the input fields to our MongoDB */}
                {/* Map data from MongoDB onto this page in the form of ForumComments component */}
                {/* Potentially add filter features, reply to specific comments,  */}
                <div>
                    {
                        commentData.map((comment, key) => {

                            return <ForumComments data={comment} key={key} /> ;
                            

                        })
                    }
                </div>

            </div >
        );
    };


}

export default Forum;