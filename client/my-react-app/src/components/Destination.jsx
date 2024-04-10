/* eslint-disable react/prop-types */
import Image from "./Image"

function Destination({ destinationData }) {

  return (
    <div className="item">
      <a href={`/destinations/${destinationData._id}`}>
        <div className="itemText">{destinationData.name}</div>
        <Image />
      </a>
    </div>
  )
}

export default Destination