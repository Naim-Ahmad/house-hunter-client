import React from 'react'
import ReactDOM from 'react-dom/client'
import { Toaster } from 'react-hot-toast'
import { RouterProvider } from 'react-router-dom'
import StateProvider from './context/globalState/StateProvider.jsx'
import './index.css'
import router from './router/routes.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StateProvider>
      <Toaster/>
      <RouterProvider router={router} />
    </StateProvider>
  </React.StrictMode>,
)
