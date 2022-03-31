// New releases will be pulling the data down and saving it as a variable it can use

import { useEffect, useState } from "react";
import axios from "axios";
import Movies from "./Movies";

const NewReleasesPage = () => {
  const [movieData, setMovieData] = useState([]);

  let currentDate = (new Date()).toISOString()


  const [loaded, setLoaded] = useState(false); 

  
  const [error, setError] = useState(null); 

  useEffect(() => {
      axios.get(`http://localhost:4494/movie/getAll`) // Sending a get request to the server

        .then((response) => {
          setLoaded(true); // if there is a response, loaded = true

        setMovieData(response.data); // An array of objects stored as state
        
        setLoaded(true); // if there is a response, loaded = true
      }).catch((error) => {
        // If an error is thrown, pass it in here and deal with it
        setLoaded(true);
        setError(error);
      });

  }); // everytime the state 'amount' is updated the useEffect runs again


  // Make if else statements to determine what our react app should return
  if(error) { // If there is an error or if error is not null (undefined)
    return <p> Oops, there has been an error D: {error.message}</p>
} else if (!loaded) {  // if loaded is false
    return <p> We are loading the great films we have to offer!</p>
} else {
    return (
      <>        <div>
          <p> Films showing </p>
        
        <p> Upcoming Movies </p>


        {movieData.map((movie, key) => {
          if (movie.release_date > currentDate) {
            return <Movies data={movie} key={key} />;
          }
          
        },)}
      </div>
      </>
    );
  };
}



export default NewReleasesPage;