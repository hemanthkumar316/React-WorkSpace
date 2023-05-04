import React, { useState } from "react";

const IncreaseCounter = () => {
  const [count, setCount] = useState(0);
  const [buttonColor, setButtonColor] = useState("");

  const handleButtonClick = () => {
    setCount(count + 1);
    setButtonColor(getRandomColor());
  };

  const getRandomColor = () => {
    const colors = ["red", "blue", "green", "yellow", "purple", "pink"];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <div className="container mt-2 text-center">
      <button style={{ backgroundColor: buttonColor }} >
        <div style={{ paddingTop: '30px', height: "200px", width: "200px", borderRadius: "50%", background: "white" }}>
          <h1> {count}</h1>
          <h6 onClick={handleButtonClick}><u>Click to increment counter</u></h6>
        </div>
      </button>
    </div>
  );
};

export default IncreaseCounter
