import { useEffect, useState } from "react";
import Option from "../components/Option";
import Loading from "../components/Loading";

function ShipsPage() {
  const [ships, setShips] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/api/starships");
      const data = await response.json();
      console.log(data);
      setShips(data);
    }
    fetchData();
  }, [])


return (
  <>
    {ships ? (
      <div className="container">
        {ships.map((shipData) => 
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