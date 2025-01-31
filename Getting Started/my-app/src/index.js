import './index.css'; 
import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById("root"));

//const name = "Ahsanul Mostakin";
const img = "https://picsum.photos/200";
root.render(
  <div>
    <h1 className="heading"> My Favorite Foods are:</h1>
    <img src = {img}/>
  </div>
);
