import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';
import Movies from './Movies';
import BookingForm from './BookingForm';

const Bookings = (sID) => {

    const [movieData, setMovieData] = useState([]);
    const [screenData, setScreenData] = useState([]);
    const [loadedMovies, setLoadedMovies] = useState(false);
    const [loadedScreens, setLoadedScreens] = useState(false); 
    const [error, setError] = useState(null);
    
    const findMovie = useRef(null);
    const [outputMovie, setOutputMovie] = useState({});
    const [screen, setScreen] = useState("");

    var tempScreens = [];

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
                setScreen("");
                tempScreens = response.data;
                tempScreens.sort(function(a, b){
                    return new Date(b.release_date) - new Date(a.release_date)
                })
                setScreenData(tempScreens);
                getPreviewMovie();     
            });
        }

    const getPreviewMovie = () => {
            for(var i=0; i<movieData.length;i++){
                if (movieData[i]._id === findMovie.current.value){
                    setOutputMovie(movieData[i]);
                    setLoadedScreens(true);
                    break;
                }
            } 
        }

    return ( 
        <>
        
            Movie:
            <Form.Select className="formBookings" type="select" ref={findMovie} onChange={getScreens} style={{width:"20rem"}}>
                <option>Please select a movie</option>
                
                {movieData.map((movie, key) => {
                    return <option value={movie._id}>{movie.title}</option>;       
                },)}
            </Form.Select>
            <br></br><br></br>
            {loadedScreens &&
            <Movies data={outputMovie}/>}
            {loadedScreens &&
            screenData.map((screen, key) => {
                return <Button variant="primary" onClick={(e) => setScreen(screen._id)}>{screen.date_time}</Button>;    
            },)}
            {screen !== "" &&
                <BookingForm sID={screen}/>
            }
        </>
     );
}
 
export default Bookings;