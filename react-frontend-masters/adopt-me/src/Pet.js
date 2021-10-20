import React from "react";

const Pet = ({ name, animal, breed, location }) => {
  return (
    <div>
      <h2>{name}</h2>
      <h3>{animal}</h3>
      <h3>{breed}</h3>
      <span>{location}</span>
    </div>
  );
};

export default Pet;
