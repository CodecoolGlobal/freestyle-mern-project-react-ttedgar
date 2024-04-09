import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import NewPlanetForm from './components/NewPlanetfForm.jsx'
import App from './App.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>
  },
  {
    path: "/admin",
    element: <NewPlanetForm></NewPlanetForm>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>,
)
