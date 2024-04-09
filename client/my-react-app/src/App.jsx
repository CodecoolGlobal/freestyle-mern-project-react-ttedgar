import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [proba, setProba] = useState(null)

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/api/proba');
      const data = await response.json();
      setProba(data)
      console.log(proba);
    }
    fetchData();
  }, [])

  if (!proba) {
    return <div>Loading</div>
  }

  return (
    <>
    <div><h2>{proba.hello}</h2></div>
    </>
  )
}

export default App
