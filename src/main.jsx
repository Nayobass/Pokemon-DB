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

async function getCharacters() {
  const userInput = document.querySelector('.searchbar__input').value
  const rawCharacters = await fetch(`https://the-one-api.dev/v2/character?name=${userInput}`, {
    headers: headers
  })
  const characters = await rawCharacters.json();
  console.log(characters)
}

const router = createBrowserRouter([
  { path:'/', element: <App /> },
  { path:'/quotes', element: <Characters getCharacters={getCharacters} /> }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
