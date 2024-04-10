/* eslint-disable react/prop-types */
import Image from "./Image"

function Destination({ destinationData }) {

  return (
    <div>
      <a href={`/destinations/${destinationData._id}`}>
        <div>{destinationData.name}</div>
        <Image />
      </a>
    </div>
  )
}

export default Destination