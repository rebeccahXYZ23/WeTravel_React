import "./Trip.css";
import TripData from "./TripData";

function Trip() {
  return (
    <div className="trip">
      <h1>Recent trips</h1>
      <p>Discover relaxing destinations using Google Maps</p>
      <div className="tripcard">
        <TripData
          image="https://gttp.imgix.net/222039/x/0/15-best-tourist-spots-in-the-philippines-beaches-diving-spots-rivers-waterfalls-historic-sites-4.jpg?auto=compress%2Cformat&ch=Width%2CDPR&dpr=1&ixlib=php-3.3.0&w=883"
          heading="Calle Crisologo, Vigan"
          text="Travel back in time as you stroll along the streets of Calle Crisologo in Vigan as part of your Ilocos itinerary.  "
        />
        <TripData
          image="https://gttp.imgix.net/222328/x/0/15-best-tourist-spots-in-the-philippines-beaches-diving-spots-rivers-waterfalls-historic-sites-7.jpg?auto=compress%2Cformat&ch=Width%2CDPR&dpr=1&ixlib=php-3.3.0&w=883"
          heading="Tubbataha Reef, Palawan"
          text="Tubbataha Reef is regarded as one of the top diving spots in the Philippines, and perhaps, the world."
        />
        <TripData
          image="https://gttp.imgix.net/222347/x/0/15-best-tourist-spots-in-the-philippines-beaches-diving-spots-rivers-waterfalls-historic-sites-11.jpg?auto=compress%2Cformat&ch=Width%2CDPR&dpr=1&ixlib=php-3.3.0&w=883"
          heading="Taal Volcano and Lake Taal"
          text="One of the world’s smallest active volcano and beautiful landmarks in the Philippines. The volcano sits on an island within a lake within an island. "
        />
      </div>
    </div>
  );
}

export default Trip;
