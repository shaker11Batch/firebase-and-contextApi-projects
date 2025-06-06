import {  StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './layouts/Root.jsx'
import Home from './components/Home/Home.jsx'
import Login from './components/Login/Login.jsx'
import SignUp from './components/SignUp/SignUp.jsx'
import AuthProvider from './contexts/AuthProvider.jsx'
import PrivateRoutes from './Routes/PrivateRoutes/PrivateRoutes.jsx'
import Orders from './components/Orders/Orders.jsx'




const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: 'login',
        Component: Login
      },
      {
        path: 'signUp',
        Component: SignUp
      },
      {
        path: '/orders',
        element: <PrivateRoutes><Orders/></PrivateRoutes>
      }

    ]

  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>   
    <AuthProvider>
    <RouterProvider router={router}></RouterProvider>
   </AuthProvider>
  </StrictMode>,
)
