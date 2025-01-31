import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById("root"));

const name = "Ahsanul Mostakin";
const num = 10;
root.render(
  <div>
    <h1> {name} My Favorite Foods</h1>
    <p>Your lucky number is { Math.floor (Math.random()* num + 1)}</p>
    <ul>
      <li>Bacon</li>
      <li>Noodles</li>
      <li>Jamon</li>
    </ul>
  </div>
);
