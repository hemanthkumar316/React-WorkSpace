import React from "react";
const ParkingSlot = ({ id, selected, onSelect }) => {
  const handleClick = () => {
    onSelect(id);
  };
   return (
    <div className={`parking-slot ${selected ? "selected" : ""}`} onClick={handleClick}>
      <div className="row">
        <div className="col col-md-5">
          <div className="border p-2 border-dark mb-2 bg-danger text-white">
            Slot {id}
           </div>
        </div>
      </div>

    </div>
  );
}

export default ParkingSlot