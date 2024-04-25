import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import NavBar from './components/NavBar.jsx'
import AdminPage from './page/AdminPage.jsx'
import DestinationsPage from './page/DestinationsPage'
import "./index.css"
import Loading from './components/Loading.jsx'
import TourGuidesPage from './page/TourGuidesPage.jsx'
import HomePage from './page/HomePage.jsx'
import PlanetPage from './page/PlanetPage.jsx'
import TourGuidePage from './page/TourGuidePage.jsx'
import ShipsPage from './page/ShipsPage.jsx'
import ShipPage from './page/ShipPage.jsx'
import BookingPage from './page/BookingPage.jsx'
import Starmap from './page/Starmap.jsx'
import Introduction from './page/Introduction.jsx'

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
      <NavBar/>
      <DestinationsPage />
    </>
  },
  {
    path: "/starships",
    element: <>
      <NavBar/>
      <ShipsPage />
    </>
  },
  {
    path: "/aboutus",
    element: <>
      <NavBar/>
      <Introduction/>
    </>
  },
  {
    path: "/contact",
    element: <>
      <NavBar/>
      <Loading/>
    </>
  },
  {
    path: "/tourguide",
    element: <>
      <NavBar/>
      <TourGuidesPage/>
    </>
  },
  {
    path: "/admin",
    element: <>
    <NavBar />
    <AdminPage/>
    <Loading/>
  </>
  },
  {
    path: "/destinations/:name",
    element: <>
      <NavBar/>
      <PlanetPage/>
    </>
  },
  {
    path: "/tourguide/:name",
    element: <>
      <NavBar/>
      <TourGuidePage/>
    </>
  },
  {
    path: "/starships/:name",
    element: <>
      <NavBar/>
      <ShipPage/>
    </>
  },
  {
    path: "/booking/:id",
    element: <>
      <NavBar/>
      <BookingPage/>
    </>
  },
  {
    path: "/starmap",
    element: <>
      <NavBar/>
      <Starmap/>
    </>
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
