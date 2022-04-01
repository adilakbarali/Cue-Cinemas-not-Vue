import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { Form } from 'react-bootstrap';
import Movies from './Movies';

const Bookings = (sID) => {

    const [movieData, setMovieData] = useState([]);
    const [screenData, setScreenData] = useState([]);
    const [loadedMovies, setLoadedMovies] = useState(false);
    const [loadedScreens, setLoadedScreens] = useState(false); 
    const [error, setError] = useState(null);
    
    const findMovie = useRef(null);
    var outputMovie;
    var test;

    useEffect(() => {
        axios.get(`http://localhost:4494/movie/getAll`) // Sending a get request to the server
  
          .then((response) => {
            setMovieData(response.data); // An array of objects stored as state
            setLoadedMovies(true); // if there is a response, loaded = true
        }).catch((error) => {
          // If an error is thrown, pass it in here and deal with it
          setLoadedMovies(true);
          setError(error);
        });
  
    }, []);

    const getScreens = () => {
            axios.get(`http://localhost:4494/screen/find?movie_id=${findMovie.current.value}`) // Sending a get request to the server
              .then((response) => { 
                setScreenData(response.data); // An array of objects stored as state              
                getPreviewMovie();
                
            });
        }

    const getPreviewMovie = () => {
        axios.get(`http://localhost:4494/movie/get/${findMovie.current.value}`)
        .then((response) => { 
            outputMovie = response.data;
            console.log(outputMovie)
            setLoadedScreens(true);// if there is a response, loaded = true
            });
        }


    return ( 
        <>
            Movie:
            <Form.Select type="select" ref={findMovie} onChange={getScreens}>
                <option>Please select a movie</option>
                {movieData.map((movie, key) => {
                    return <option value={movie._id}>{movie.title}</option>;       
                },)}
            </Form.Select>
            {loadedScreens === true &&
            <Movies data={outputMovie}/>}
        </>
     );
}
 
export default Bookings;