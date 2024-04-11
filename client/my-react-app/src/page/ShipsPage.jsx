import { useEffect, useState } from "react";
import Option from "../components/Option";
import Loading from "../components/Loading";

function ShipsPage() {
  const [ship, setShip] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/api/starships");
      const data = await response.json();
      console.log(data);
      setShip(data);
    }
    fetchData();
  }, [])


return (
  <>
    {ship ? (
      <div className="container">
        {ship.map((shipData) => 
          <Option optionData={shipData} option='starships' key={shipData._id}/>
        )}
      </div>
    ) : (
      <Loading />
    )}
  </>
);
}

export default ShipsPage