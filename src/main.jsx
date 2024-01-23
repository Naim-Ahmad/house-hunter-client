import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Toaster } from 'react-hot-toast'
import { RouterProvider } from 'react-router-dom'
import StateProvider from './context/globalState/StateProvider.jsx'
import './index.css'
import router from './router/routes.jsx'

const queryCLient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryCLient}>
    <StateProvider>
      <Toaster/>
      <RouterProvider router={router} />
    </StateProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
