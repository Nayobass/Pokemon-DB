import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import Pokemon from './pages/Pokemon.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router';
import Details from './pages/Details.jsx';

const router = createBrowserRouter([
  { path:'/', element: <App /> },
  { path:'/pokemon', element: <Pokemon /> },
  { path:'/pokemon/:id', element: <Details />} 
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
