import React, { useState } from "react";

const ParkingSlots = () => {
  const [parking, setParking] = useState(Array(8).fill(false));
  const [availableSlots, setAvailableSlots] = useState(8);

  const handleSelect = (index) => {
    const newParking = [...parking];
    newParking[index] = !newParking[index];
    setParking(newParking);

    if (newParking[index]) {
      setAvailableSlots((prev) => prev - 1);
    } else {
      setAvailableSlots((prev) => prev + 1);
    }
  };

  return (
    <div className="container mt-2  mb-5 text-center">
      <h1>Parking Slots</h1>
      <h3>Available Slots : {availableSlots}</h3>
      <div>
        {parking.map((slot, index) => (
          <button className="btn btn-lg mr-3 text-white"
            key={index}
            onClick={() => handleSelect(index)}
            style={{ backgroundColor: slot ? "red" : "green" }}
          >
            {index+1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ParkingSlots;
