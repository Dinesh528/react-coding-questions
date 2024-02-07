import React, { useState } from "react";

const data = [
  {
    id: 1,
    name: "David Stephenson",
    status: "COMPLETED",
  },
  {
    id: 2,
    name: "Sienna Miller",
    status: "PENDING",
  },
  {
    id: 3,
    name: "Jack Forster",
    status: "COMPLETED",
  },
  {
    id: 4,
    name: "Elliot Fleming",
    status: "COMPLETED",
  },
  {
    id: 5,
    name: "Cameron Gardiner",
    status: "PENDING",
  },
  {
    id: 6,
    name: "Charles Hayes",
    status: "COMPLETED",
  },
  {
    id: 7,
    name: "Harriet Gardiner",
    status: "PENDING",
  },
  {
    id: 8,
    name: "Jude Atkinson",
    status: "PENDING",
  },
  {
    id: 9,
    name: "Kiera Duffy",
    status: "COMPLETED",
  },
  {
    id: 10,
    name: "Alice Barrett",
    status: "PENDING",
  },
];

const FilterStatus = () => {
  const [filtered, setFiltered] = useState(data);

  const handleStatus = (filterText) => {
    if (filterText === "COMPLETED") {
      const updatedStatus = data.filter(
        (status) => status.status === "COMPLETED"
      );
      console.log(updatedStatus);
      setFiltered(updatedStatus);
    } else {
      const updatedStatus = data.filter(
        (status) => status.status === "PENDING"
      );
      console.log(updatedStatus);
      setFiltered(updatedStatus);
    }
  };

  return (
    <div>
      <h2>Filtered Status</h2>
      <div>
        <select onChange={(e) => handleStatus(e.target.value)}>
          <option value="COMPLETED">COMPLETED</option>
          <option value="PENDING">PENDING</option>
        </select>
        <button onClick={() => handleStatus("COMPLETED")}>COMPLETED</button>
        <button onClick={() => handleStatus("PENDING")}>PENDING</button>
      </div>
      {filtered.map((status) => {
        return (
          <div key={status.id}>
            <h5>Name:{status.name}</h5>
            <p>Status:{status.status}</p>
          </div>
        );
      })}
    </div>
  );
};

export default FilterStatus;
