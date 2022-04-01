// New releases will be pulling the data down and saving it as a variable it can use

import { useEffect, useState } from "react";
import axios from "axios";
import UpcomingMovies from "./UpcomingMovies";

const UpcomingReleases = () => {
  const [movieData, setMovieData] = useState([]);

  let currentDate = (new Date()).toISOString()

  // How do we deal with data that takes a while to load?
  // We want the user to know data is loading, otherwise they think its broken
  const [loaded, setLoaded] = useState(false); // at run time the data is not loaded

  // How do we deal with data when there is an error?
  const [error, setError] = useState(null); // at run time there is no error

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

  }, []); // everytime the state 'amount' is updated the useEffect runs again


  // Make if else statements to determine what our react app should return
  if (error) { // If there is an error or if error is not null (undefined)
    return <p> Oops, there has been an error D: {error.message}</p>
  } else if (!loaded) {  // if loaded is false
    return <p> Please wait, data is loading :)</p>
  } else {

    

    return (
      <div>
        <p> Upcoming Movies </p>


        {movieData.map((movie, key) => {
          if (movie.release_date > currentDate) {
            return <UpcomingMovies data={movie} key={key} />;
          }
          
        })}
      </div>
    );
  };
}


export default UpcomingReleases;