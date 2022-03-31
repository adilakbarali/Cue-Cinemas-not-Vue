// New releases will be pulling the data down and saving it as a variable it can use

import { useEffect, useState } from "react";
import axios from "axios";
import Movies from "./Movies";

const NewReleases = () => {
    const [data, setData] = useState([]);
  const [amount, setAmount] = useState(20);


  const [loaded, setLoaded] = useState(false); 

  
  const [error, setError] = useState(null); 

  // For pulling the data from the API when the page has loaded
  useEffect(() => {
    setTimeout(() => {
      axios.get(`http://localhost:4494/movie/getAll`) // Sending a get request to the server

        .then((response) => {
          setLoaded(true); // if there is a response, loaded = true

          setData(response.data); // An array of objects stored as state
        }).catch((error) => {
          // If an error is thrown, pass it in here and deal with it
          setLoaded(true);
          setError(error);
        });
    }, 3000);
  }, [amount]); // everytime the state 'amount' is updated the useEffect runs again


  // Make if else statements to determine what our react app should return
  if(error)  { // If there is an error or if error is not null (undefined)
    return <p> Oops, there has been an error D: {error.message}</p>
} else if (!loaded) {  // if loaded is false
    return <p> We are loading the great films we have to offer!</p>
} else {
    return (
        <div>
          <p> Films showing </p>
          
    
          {data.map((movie, key) => {
            return <Movies data={movie} key={key} />;
          })}
        </div>
      );
    };
}

 
export default NewReleases;