import React, { useState } from "react";
import ParkingSlot from "./ParkingSlot";
const Parking = () => {
  const [selectedSlots, setSelectedSlots] = useState([]);
  const availableSlots = 8 - selectedSlots.length;

  const handleSlotSelect = (id) => {
    const index = selectedSlots.indexOf(id);
    if (index === -1) {
      setSelectedSlots([...selectedSlots, id]);
    }
     else {
      setSelectedSlots([
        ...selectedSlots.slice(0, index),
        ...selectedSlots.slice(index + 1),
      ]);
    }
  };

  return (
    <div className="container mt-5">
      <h1>Available Parking Slots : {availableSlots}</h1>
      <div className="parking-slots">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((id) => (
          <ParkingSlot
            key={id}
            id={id}
            selected={selectedSlots.includes(id)}
            onSelect={handleSlotSelect}
          />
        ))}
      </div>
    </div>
  );
}
export default Parking