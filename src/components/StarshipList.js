import React from "react";
import useStarship from "../context/StarshipContext";
import Card from "./Card";

function StarshipList() {
  const { starshipData } = useStarship();
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {starshipData.length > 0 &&
        starshipData.map((starship, i) => (
          <Card
            key={i}
            name={starship.name}
            model={starship.model}
            rate={starship.hyperdrive_rating}
          />
        ))}
    </div>
  );
}

export default StarshipList;
