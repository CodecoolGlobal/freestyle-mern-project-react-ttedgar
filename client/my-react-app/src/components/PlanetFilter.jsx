import { useState } from "react";
import FilteredPlanet from "./FilteredPlanet";

function PlanetFilter() {
  const filterOptions = ["name", "climate", "terrain", "gravity", "population", "residents", "imageURL"];
  const [option, setOption] = useState(null);
  const [filterValue, setFilterValue] = useState(null);
  const [filteredPlanets, setFilteredPlanets] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();
    const response = await fetch(`/api/planets/?${option}=${filterValue}`);
    const data = await response.json();
    console.log(data);
    setFilteredPlanets(data);
  }

  return (
    <div className='adminItem'>
      <form onSubmit={handleSubmit}>
        <select name="filter" onChange={(event) => setOption(event.target.value)}>
          <option value="">Please select a value!</option>
          {filterOptions.map((option) => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
        <input type="text" onChange={event => setFilterValue(event.target.value)} />
        <button type="submit">Submit</button>
      </form>
      {filteredPlanets && (
        <div>
          {filteredPlanets.map(filteredPlanet => (
            <FilteredPlanet key={filteredPlanet._id} name={filteredPlanet.name} />
          ))}
        </div>
      )
      }
    </div >
  );
}

export default PlanetFilter;