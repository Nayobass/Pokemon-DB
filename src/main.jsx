import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './components/Header.jsx'
import Characters from './pages/Characters.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Nav from './components/Nav.jsx'

const router = createBrowserRouter([
  { path:'/', element: <App /> },
  { path:'/characters', element: <Characters /> }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
