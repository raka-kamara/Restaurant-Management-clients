import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import router from './Routes/Route.jsx'
import { RouterProvider } from 'react-router-dom'
import AuthProvider from './Provider/AuthProvider.jsx'
import { Toaster } from 'react-hot-toast'
import {  HelmetProvider } from 'react-helmet-async'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <AuthProvider>
          <HelmetProvider>
          <RouterProvider router={router} />
          </HelmetProvider>
           <Toaster/>
         
        </AuthProvider>

  </React.StrictMode>,
)
