import "./App.css";
import React, { useState, useEffect } from "react";

export default function App() {
  const [data, setData] = useState(
    "Need advice? Random Advice Generator is here to help."
  );
  const [number, setNumber] = useState(0);

  const handleClick = () => {
    fetch("https://api.adviceslip.com/advice")
      .then((item) => item.json())
      .then((actualData) => {
        setData(actualData.slip.advice);
        setNumber(actualData.slip.id);
      });
  };

  return (
    <div className="background">
      <div className="app-global">
        <p className="advice-number">Advice #{number}</p>
        <p className="advice">"{data}"</p>
        <div className="divider"></div>
        <button className="button-fetch" onClick={handleClick}></button>
      </div>
    </div>
  );
}
