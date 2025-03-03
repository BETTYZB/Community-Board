import React from "react";
import "../styles/foodTruck.css";

function FoodTruckCard({ image, name, cuisine, link}) {

  return (
    <div className="food-truck-card">
      <img src={image} alt={name} className="food-truck-image" />
      <h2>{name}</h2>
      <p>{cuisine}</p>
      <a href= {link}>
        <button className="view-menu">View Menu</button>
      </a>
      
    </div>
  );
}

export default FoodTruckCard;
