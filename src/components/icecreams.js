import React from "react";
import "./items.css";
import cream1 from "./icecreams/cream1.jpg";
import cream2 from "./icecreams/cream2.jpg";
import cream3 from "./icecreams/cream3.jpg";
import cream4 from "./icecreams/cream4.jpg";
import cream5 from "./icecreams/cream5.jpg";
import cream6 from "./icecreams/cream6.jpg";
import cream7 from "./icecreams/cream7.jpg";

function Creams() {
  const foodImages = [cream1, cream2, cream3, cream4, cream5, cream6, cream7];

  const foodItems = [
    { name: "Icecream1", description: "Lorem Ipsum is simply dummy text.", price: "$13.44" },
    { name: "Icecream2", description: "It has been the industry's standard dummy text.", price: "$15.99" },
    { name: "Icecream3", description: "When an unknown printer took a galley.", price: "$12.50" },
    { name: "Icecream4", description: "And scrambled it to make a type specimen book.", price: "$14.20" },
    { name: "Icecream5", description: "It has survived not only five centuries.", price: "$16.75" },
    { name: "Icecream6", description: "But also the leap into electronic typesetting.", price: "$18.00" },
    { name: "Icecream7", description: "Remaining essentially unchanged.", price: "$19.99" }
  ];

  return (
    <>
      <h1>Icecreams</h1>
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

export default Creams;
