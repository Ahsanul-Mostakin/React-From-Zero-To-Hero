import React from "react";
import ReactDOM from "react-dom";
import cars from "./practice";

ReactDOM.render(
  <table>
    <thead>
      <tr>
        <th>Brand</th>
        <th>Top Speed</th>
        <th>Top Colour</th>
      </tr>
    </thead>
    <tbody>
      {cars.map(({ model, speedStats: { topSpeed }, coloursByPopularity }, index) => (
        <tr key={index}>
          <td>{model}</td>
          <td>{topSpeed} mph</td> 
          <td>{coloursByPopularity[0]}</td> 
        </tr>
      ))}
    </tbody>
  </table>,
  document.getElementById("root")
);
