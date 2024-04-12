/* eslint-disable react/prop-types */
function FilteredPlanet({ id, name }) {

  return (
    <div>
      <span key={id}>{name}</span>
      <button>edit</button>
      <button>delete</button>
    </div>
  )
}

export default FilteredPlanet;