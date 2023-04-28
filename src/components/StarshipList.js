import React from "react";
import useStarship from "../context/StarshipContext";
import Card from "./Card";
import Loading from './Loading';

function StarshipList() {
  const { starshipData, itemsToDisplay, loading } = useStarship();

  return (
    <div className="">
     {loading ? (
      <div className="mx-auto my-5 bottom-0 min-h-[60vh]">
        <Loading />
        </div>
      ) : (
    <div className="flex flex-wrap gap-4 justify-center">
      {starshipData.length > 0 &&
        starshipData.map((starship, i) => (
          <Card
            id={Number(starship.url.split("/").filter(Boolean).pop())}
            starship={starship}
            photoLink={itemsToDisplay[i]}
            key={i}
            name={starship.name}
            model={starship.model}
            rate={starship.hyperdrive_rating}
          />
        ))}
    </div>
      )}
    </div>
  );
}

export default StarshipList;
