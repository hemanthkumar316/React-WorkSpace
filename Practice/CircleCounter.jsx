import React, { useState } from 'react';

function Circle(props) {
  const [isGray, setIsGray] = useState(false);

  function handleClick() {
    setIsGray(!isGray);
    props.onCircleClick(!isGray);
  }

  const circleStyle = {
    backgroundColor: isGray ? 'gray' : 'red',
    borderRadius: '60%',
    width: '100px',
    height: '100px',
    margin: '10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  };

  return (
    <div style={circleStyle} onClick={handleClick}></div>
  );
}


function CircleCounter() {
  const [numCircles, setNumCircles] = useState(0);
  const [numGrayCircles, setNumGrayCircles] = useState(0);

  function handleCircleClick(isGray) {
    setNumGrayCircles(numGrayCircles + (isGray ? 1 : -1));
  }

  function handleButtonClick() {
    setNumCircles(numCircles + 1);
  }

return (
    <div>
      <button  onClick={handleButtonClick}>Add circle</button>
      <div>
        Number of gray circles: {numGrayCircles}
      </div>
      {[...Array(numCircles)].map((_, index) => <Circle key={index} onCircleClick={handleCircleClick} />)}
    </div>
  );
}

export default CircleCounter;