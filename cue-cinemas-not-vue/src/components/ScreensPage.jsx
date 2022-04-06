import DirectorsScreen from "./DirectorsScreen";
import StandardScreen from "./StandardScreen";

const ScreensPage = () => {
    return ( 
        <>
        <br />
        <br />
        <div className="placesToGoHeader">
        <h1>Screens</h1>
        </div>
        <br />
        <br />
        <StandardScreen/>
        <br />
        <br />
        <DirectorsScreen/>
        </>
     );
}
 
export default ScreensPage;