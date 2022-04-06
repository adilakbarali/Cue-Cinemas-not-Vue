// import * as lineReader from 'line-reader'
import axios from "axios";
import { useState, useEffect } from "react";
import { Card, Container, Row, Col, Button, Form } from "react-bootstrap";
import ForumComments from "./ForumComments";


const Forum = () => {

    // states, declaring variables and use effects

    const [commentData, setCommentData] = useState([]);

    const [movieData, setMovieData] = useState([])

    const ratingList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    const bannedWords = ["fuck", "shit", "wanker", "cunt", "bitch", "dick", "nigga", "faggot"]


    let commentObj = {
        "full_name": "",
        "email": "",
        "movie_id": "",
        "rating": null,
        "message": ""
    }

    // How do we deal with data that takes a while to load?
    // We want the user to know data is loading, otherwise they think its broken
    const [loaded, setLoaded] = useState(false); // at run time the data is not loaded

    // How do we deal with data when there is an error?
    const [error, setError] = useState(null); // at run time there is no error

    // const moderateContent = (text) => {

    //     let vulgarity = 0

    //     while (vulgarity < 1) {
    //         lineReader.eachLine("../resources/blackList.txt", (line) => {
    //             if (text.match(line(0, line.indexOf("  "))) === null) {
    //                 
    //             }
    //             else {
    //                 vulgarity += 1
    //             }             
    //         })
    //     }

    //     if (vulgarity == 0) {
    //         return true
    //     }
    //     else {
    //         return false
    //     }
    // }

    const moderateContentTwo = (text) => {

        let vulgarity = 0

        for (let i = 0; i < bannedWords.length; i++) {

            if (text.search(bannedWords[i]) === null) {

                ;
            }
            else {

                vulgarity += 1
            }
        }

        if (vulgarity > 0) {

            return true
        }
        else {
            
            return false
        } 
    }

    const createNewComment = () => {

        

        if (moderateContentTwo(commentObj.message) == false) {
            axios.post(`http://localhost:4494/discussion/create`, commentObj)
            .then((response) => {

                console.log(response)

            })
            .catch((error) => {

                console.log(error)

            })
        }
        else {
            alert("Certain words and phrases are not permissable")
        }
        

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

    useEffect(() => {
        // axios is a simple asynchronous HTTP request library we install with npm i axios
        // To do a get request axios.get('url to get from')
        axios.get(`http://localhost:4494/movie/getAll`) // Sending a get request to the server

            // .then() - used for async code, do the method above, when it has returned something
            // put the return into this method and run
            .then((response) => {
                // Take what axios returns, call it 'response' and print it out

                setMovieData(response.data); // An array of objects stored as state

                setLoaded(true); // if there is a response, loaded = true
            }).catch((error) => {
                // If an error is thrown, pass it in here and deal with it
                setLoaded(true);
                setError(error);
            });

    }, []);


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
                                <Card className="discussionCards" style={{ width: '40rem' }}>
                                    <Card.Body>
                                        <Form>
                                            <Form.Group>
                                                <Form.Control type="text" placeholder="Enter your name" onChange={(e) => commentObj.full_name = e.target.value} />
                                                <Form.Control type="email" placeholder="  Enter your email" onChange={(e) => commentObj.email = e.target.value} />
                                            </Form.Group>
                                            <br />
                                            <Form.Group>
                                                <Form.Select type="select" onChange={(e) => commentObj.movie_id = e.target.value}>
                                                    <option>Please select a movie</option>
                                                    {movieData.map((movie, key) => {
                                                        return <option value={movie._id}>{movie.title}</option>;
                                                    })}
                                                </Form.Select>
                                                <br />
                                                <Form.Select type="select" onChange={(e) => commentObj.rating = e.target.value}>
                                                    <option value={null}>Rate the movie out of 10</option>
                                                    {ratingList.map((number, key) => {
                                                        return <option value={number}>{number}</option>
                                                    })}
                                                </Form.Select>
                                            </Form.Group>
                                            <br />
                                            <Form.Group>
                                                <Form.Control type="text" placeholder="Write your comment here" onChange={(e) => commentObj.message = e.target.value} />
                                            </Form.Group>
                                            <Button variant="primary" onClick={createNewComment}>
                                                Post Comment
                                            </Button>
                                        </Form>


                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>

                    </Container>
                </div>

                <br /><br /><br /><br /><br /><br /><br /><br /><br />

                <div>
                    {
                        commentData.map((comment, key) => {

                            return <ForumComments data={comment} key={key} />;


                        })
                    }
                </div>

            </div >
        );
    };


}

export default Forum;