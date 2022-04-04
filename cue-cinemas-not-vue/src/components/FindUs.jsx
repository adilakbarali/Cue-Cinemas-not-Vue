import DirectionsCard from "./DirectionsCard";
import FindUsCard from "./FindUsCard";
import MapCard from "./MapCard";

const FindUs = () => {
  return (
    <>
      <br />
      <div className="placesToGoHeader">
        <h1> How to Find Us </h1>
      </div>
      <br />
      <FindUsCard />
      <br />
      <br />
      <div className="placesToGoHeader">
        <h1> Directions and Transport Links: </h1>
      </div>
      <br />
      <DirectionsCard />
      <br />
      <br/>
      <div className="placesToGoHeader">
        <h1> Google Map: </h1>
      </div>
      <MapCard />

    </>
  );
};

export default FindUs;
