import { useEffect, useState } from "react";
import Option from "../components/Option";
import Loading from "../components/Loading";


function TourGuidesPage() {
  
  const [tourGuidesData, setTourGuidesData] = useState(null)

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/api/people")
      const data = await response.json();
      console.log(data);
      setTourGuidesData(data);
    }
    fetchData()
  }, [])

  return (
    <>
      {tourGuidesData ? (
        <div className="container"> 
        {tourGuidesData.map((tourGuidesData) => 
      <Option optionData={tourGuidesData} key={tourGuidesData._id}/>
      )}
        </div>
      ) : (
        <Loading/>
      )}
    </>
  )
}

export default TourGuidesPage