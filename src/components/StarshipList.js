import { useState } from "react";
import axios from "axios";
import useStarship from "../context/StarshipContext";
import Card from "./Card";
import Loading from "./Loading";

function StarshipList() {
  const { starshipData, itemsToDisplay, loading, setStarshipData } =
    useStarship();
  const [currentPage, setCurrentPage] = useState(1);

  const loadMoreStarships = async () => {
    const nextPage = currentPage + 1;
    const apiUrl = `https://swapi.dev/api/starships/?page=${nextPage}`;

    await axios
      .get(apiUrl)
      .then((response) => {
        const newStarships = [...starshipData, ...response.data.results];
        setStarshipData(newStarships);
        setCurrentPage(nextPage);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="">
      {loading ? (
        <div className="mx-auto my-5 bottom-0 min-h-[60vh]">
          <Loading />
        </div>
      ) : (
        <div className="flex flex-col justify-center">
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
          {currentPage <= 3 && (
            <button
              className="text-white mx-auto mt-5  bg-cyan-500 shadow-lg border-4 border-cyan-500 shadow-cyan-500/50 hover:shadow-lg hover:shadow-slate-50 hover:text-sky-400 hover:bg-slate-50 w-36 py-2 rounded-md font-bold"
              onClick={loadMoreStarships}
            >
              Load More
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export default StarshipList;
