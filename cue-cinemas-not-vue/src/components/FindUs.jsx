import DirectionsCard from "./DirectionsCard";
import FindUsCard from "./FindUsCard";
import MapCard from "./MapCard";

const FindUs = () => {
  return (
    <>
      <br />
      <h1> How to Find Us </h1>
      <br />
      <FindUsCard />
      <br />
      <br />
      <h3> Directions and Transport Links: </h3>
      <br />
      <DirectionsCard />
      <br />
      <br/>
      <h3> Google Map: </h3>
      <MapCard />
    </>
  );
};

export default FindUs;
