import NavBar from "./NavBar";
import PlacesToGoRestaurantCards from "./PlacesToGoRestaurantCards";
import PTGActivitiesCards from "./PTGActivitiesCards";
import PTGDrinkCards from "./PTGDrinkCards";

const PlacesToGoPage = () => {
    return ( 
        <>
        
        <br />
        <br />
        <div className="placesToGoHeader">
        <h1>Places To Go!</h1>
        </div>
        <br />
        <PlacesToGoRestaurantCards/>
        <br />
        <br />
        <PTGDrinkCards/>
        <br />
        <br />
        <PTGActivitiesCards/>
        
        </>
     );
}
 
export default PlacesToGoPage;