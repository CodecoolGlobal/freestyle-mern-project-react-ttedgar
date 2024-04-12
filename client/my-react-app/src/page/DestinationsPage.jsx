import { useEffect, useState } from "react";
import Option from "../components/Option";
import Loading from "../components/Loading";

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
  <>
    {destinationsData ? (
      <div className="container">
        {destinationsData.map((destinationData) => 
          <Option optionData={destinationData} option='destinations' key={destinationData._id}/>
        )}
      </div>
    ) : (
      <Loading/>
    )}
  </>
);
}

export default DestinationsPage;