import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import Payment from "./Payment";

function BookingPage() {
  const { id } = useParams();
  const [planet, setPlanet] = useState(null);
  const [ships, setShips] = useState(null);
  const [guide, setGuide] = useState(null);
  const [ship, setShip] = useState(null);
  const [arrival, setArrival] = useState(null);
  const [departure, setDeparture] = useState(null);
  const [payment, setPayment] = useState(false);
  const [tripDetails, setTripDetails] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/api/starships");
      const data = await response.json();
      data.forEach((starship) => {
        starship.guides = [];
        starship.pilots.forEach((pilot) => starship.guides.push(pilot.name));
      });
      setShips(data);
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchPlanet() {
      const response = await fetch(`/api/planet/${id}`);
      const data = await response.json();
      setPlanet(data);
    }
    fetchPlanet();
  }, [id]);

  if (!planet) {
    return <Loading />;
  }

  return (
    <div>
      <h2>Booking flight to {planet.name}</h2>
      <div>
        <form>
          <label>Choose tourguide</label>
          <select onChange={(e) => setGuide(e.target.value)}>
            <option value="">Select</option>
            {planet.residents.map((resident, index) => {
              return (
                <option key={index} value={resident.name}>
                  {resident.name}
                </option>
              );
            })}
          </select>
          {guide ? (
            <div>
              <label>Choose starship</label>
              <select onChange={(e) => setShip(e.target.value)}>
                <option value="">Select</option>
                <option value="Starjumper X102">Starjumper X102</option>
                {ships
                  .filter((ship) => ship.guides.includes(guide))
                  .map((ship, index) => (
                    <option key={index} value={ship.name}>
                      {ship.name}
                    </option>
                  ))}
              </select>
            </div>
          ) : null}
          {ship ? (
            <div>
              <label>Arrival</label>
              <input
                type="date"
                onChange={(e) => setArrival(e.target.value)}
                min={new Date().toISOString().substring(0, 10)}
              />
            </div>
          ) : null}
          {arrival ? (
            <div>
              <label>Departure</label>
              <input
                type="date"
                onChange={(e) => {
                  setDeparture(e.target.value);
                  console.log(e.target.value);
                }}
                min={arrival}
              />
            </div>
          ) : null}
          {departure ? (
            <div>
              <h2>
                Number of days: {Math.floor((Date.parse(departure) - Date.parse(arrival)) / 86400000)}
              </h2>
              <h2>
                Estimated cost: {planet.price * Math.floor((Date.parse(departure) - Date.parse(arrival)) / 86400000) 
                + (ship === "Starjumper X102" ? 10000 : (ships.find((starship) => starship.name === ship).price * 2))} Republic credit
              </h2>
            </div>
          ) : null}
          {departure ? <button onClick={(e) => {
            e.preventDefault();
            payment ? setPayment(false) : setPayment(true);
            setTripDetails({
                planet: planet._id,
                guide,
                ship,
                arrival,
                departure,
              })
            }}>Payment</button> : null}
        </form>
          {payment ? <Payment tripDetails={tripDetails}/> : null}
      </div>
    </div>
  );
}

export default BookingPage;
