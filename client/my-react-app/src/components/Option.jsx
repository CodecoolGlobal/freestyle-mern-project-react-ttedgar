/* eslint-disable react/prop-types */
import Image from "./Image"

function Option({ optionData }) {

  return (
    <div className="item">
      <a href={`/destinations/${optionData._id}`}>
        <div className="itemText">{optionData.name}</div>
        <Image />
      </a>
    </div>
  )
}

export default Option