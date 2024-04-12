import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import NavBar from './components/NavBar.jsx'
import AdminPage from './page/AdminPage.jsx'
import DestinationsPage from './page/DestinationsPage'
import "./index.css"
import Loading from './components/Loading.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <>
    <NavBar />
    <Loading/>
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
      <Loading/>
    </>
  },
  {
    path: "/admin",
    element: <>
    <NavBar />
    <AdminPage/>
    <Loading/>
  </>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
