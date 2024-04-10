import { useEffect, useState } from "react";
import Destination from "../components/Destination";

function DestinationsPage() {

  const [destinationsData, setDestinationsData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/api/planets");
      const data = await response.json();
      console.log(data);
      setDestinationsData(data);
    }
    fetchData();
  }, [])


  return (
    <div>
      {destinationsData ? (
        destinationsData.map((destinationData) => 
        <Destination destinationData={destinationData} key={destinationData._id}/>
      )) : (
        <div>Loading</div>
      )}
    </div>
  );
}

export default DestinationsPage;