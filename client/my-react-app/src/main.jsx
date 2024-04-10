import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import NewPlanetForm from './components/NewPlanetfForm.jsx'
import NavBar from './components/NavBar.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBar/>
  },
  {
    path: "/destinations",
    element: <>
    <NavBar/>
    <div>még nincs</div>
    </>
  },
  {
    path: "/aboutus",
    element: <>
    <NavBar/>
    <div>még nincs</div>
    </>
  },
  {
    path: "/contact",
    element: <>
    <NavBar/>
    <div>még nincs</div>
    </>
  },
  {
    path: "/tourguide",
    element: <>
    <NavBar/>
    <div>még nincs</div>
    </>
  },
  {
    path: "/admin",
    element:<>
    <NavBar/>
    <NewPlanetForm></NewPlanetForm>
    </> 
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>,
)
