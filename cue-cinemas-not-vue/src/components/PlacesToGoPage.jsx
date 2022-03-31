import NavBar from "./NavBar";
import PlacesToGoRestaurantCards from "./PlacesToGoRestaurantCards";
import PTGActivitiesCards from "./PTGActivitiesCards";
import PTGDrinkCards from "./PTGDrinkCards";

const PlacesToGoPage = () => {
    return ( 
        <>
        <NavBar/>
        <br />
        <br />
        <h1>Explore the area!</h1>
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