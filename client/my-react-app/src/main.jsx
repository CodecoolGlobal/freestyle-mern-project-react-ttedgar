import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import NavBar from './components/NavBar.jsx'
import Admin from './components/Admin.jsx'
import DestinationsPage from './page/DestinationsPage'
import "./index.css"
import Loading from './components/Loading.jsx'
import TourGuidesPage from './page/TourGuidePage.jsx'
import HomePage from './page/HomePage.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <>
    <HomePage/>
    </>
  },
  {
    path: "/destinations",
    element: <>
      <NavBar />
      <DestinationsPage />
    </>
  },
  {
    path: "/aboutus",
    element: <>
      <NavBar />
      <Loading/>
    </>
  },
  {
    path: "/contact",
    element: <>
      <NavBar />
      <Loading/>
    </>
  },
  {
    path: "/tourguide",
    element: <>
      <NavBar />
      <TourGuidesPage/>
    </>
  },
  {
    path: "/admin",
    element: <Admin />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
