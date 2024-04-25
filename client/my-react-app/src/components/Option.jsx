/* eslint-disable react/prop-types */
import Image from "./Image"

function Option({ optionData, option }) {

  return (
    <div className="item">
      <a href={`/${option}/${optionData.name}`}>
        <div className="itemText">{optionData.name}</div>
        <Image image={optionData.imageUrl}/>
      </a>
    </div>
  )
}

export default Option