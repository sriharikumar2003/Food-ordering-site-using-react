import React from "react";
import "./items.css";
import food1 from "./foods/food1.jpg";
import food2 from "./foods/food2.jpg";
import food3 from "./foods/food3.jpg";
import food4 from "./foods/food4.jpg";
import food5 from "./foods/food5.jpg";
import food6 from "./foods/food6.jpg";
import food7 from "./foods/food7.jpg";

function Foods() {
  const foodImages = [food1, food2, food3, food4, food5, food6, food7];

  const foodItems = [
    { name: "FoodItem1", description: "Lorem Ipsum is simply dummy text.", price: "$13.44" },
    { name: "FoodItem2", description: "It has been the industry's standard dummy text.", price: "$15.99" },
    { name: "FoodItem3", description: "When an unknown printer took a galley.", price: "$12.50" },
    { name: "FoodItem4", description: "And scrambled it to make a type specimen book.", price: "$14.20" },
    { name: "FoodItem5", description: "It has survived not only five centuries.", price: "$16.75" },
    { name: "FoodItem6", description: "But also the leap into electronic typesetting.", price: "$18.00" },
    { name: "FoodItem7", description: "Remaining essentially unchanged.", price: "$19.99" }
  ];

  return (
    <>
      <h1>Plates</h1>
      <div className="foodcontain">
        {foodItems.map((item, index) => (
          <div key={index} className="foodcard">
            <img src={foodImages[index]} className="food" alt="pic" />
            <h2 className="foodnam">{item.name}</h2>
            <p className="para">{item.description}</p>
            <div className="amorder">
              <p className="amount">{item.price}</p>
              <button className="order">Order</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Foods;
