import { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import Characters from './pages/Characters.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router';

const headers = {
  'Accept': 'application/json',
  'Authorization': 'Bearer 1uecSlwQy0uPZKD0INeb'
}

async function getQuotes() {
  const rawQuotes = await fetch('https://the-one-api.dev/v2/quote?dialog=Gimli!', {
    headers: headers
  })
  const quotes = await rawQuotes.json();
  console.log(quotes)
}

getQuotes();

const router = createBrowserRouter([
  { path:'/', element: <App /> },
  { path:'/quotes', element: <Characters /> }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
