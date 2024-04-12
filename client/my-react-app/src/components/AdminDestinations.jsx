/* eslint-disable react/prop-types */
function AdminDestinations({planetList}) {

  return (<div className='adminItem'> {
    planetList.map((planet) => (
      <div key={planet['_id']}>
        <h2>{planet.name}</h2>
        <h3>{planet.climate}</h3>
        <h3>{planet.terrain}</h3>
        <h3>{planet.gravity}</h3>
        <h3>{planet.population}</h3>
        <h3>Residents:</h3>
        <>{planet.residents.map((resident, index) => (
          <div key={index}><h5>{resident.name}</h5></div>
        ))}</>
        <img src={planet.imgURL}></img>
      </div>
    ))} </div>)
}

export default AdminDestinations