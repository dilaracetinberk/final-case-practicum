import React from "react";
import useStarship from "../context/StarshipContext";
import Card from "./Card";

function StarshipList() {
  const { starshipData } = useStarship();
  const photos = [1, 2, 3, 4, 6, 7, 8, 1, 1, 2, 3, 4, 6, 7, 8, 1]

  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {starshipData.length > 0 &&
        starshipData.map((starship, i) => (
          <Card
            id={Number(
              starship.url
                .split('/')
                .filter(Boolean)
                .pop()
            )}
            starship = {starship}
            photoLink = {photos[i]}
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
