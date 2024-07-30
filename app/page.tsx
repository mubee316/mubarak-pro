'use client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import './App.css'
import AppLayout from './Layout/App-layout'
import LandingPage from './pages/LandingPage'
import Dashboard from './dashboard/page'
import Auth from './pages/Auth'
import Link from './pages/Link'
import RedirectLink from './pages/Redirect-link'

const router = createBrowserRouter([
{
  element:<AppLayout/>,
  children:[
  {
    path: "/",
    element:<LandingPage />,
  } ,  
  {
    path: '/Dashboard',
    element:<Dashboard/>
  }   ,
  {
    path: '/Auth',
    element:<Auth/>
  }   ,
  {
    path: '/Link/:id',
    element:<Link/>
  }   ,
  {
    path: '/:id',
    element:<RedirectLink/>
  }   
  ]
}
])

function App() {

  return <RouterProvider router={router}/>
}

export default App
