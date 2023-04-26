import { useEffect } from "react";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import useStarship from "../context/StarshipContext";

function SingleItemPage() {
  const { starshipData, setStarshipData } = useStarship();
  // const { id } = useParams();
  const location = useLocation();
  const propsData = location.state;
console.log(propsData)
 /*  useEffect(() => {
    // List single starship
    const starships = async () => {
      try {
        const response = await axios.get(
          `https://swapi.dev/api/starships/${id}`
        );
        setStarshipData(response.data.results);
      } catch (error) {
        throw new Error(`Error: ${error}`);
      }
    };
    starships();
  }, [id]);
*/
  return (
    <div className="ship-details">
      <p>Name: {propsData.name}</p>
      <p>Model: </p>
      <Link to="/">Return</Link>
    </div>
  );
}

export default SingleItemPage;
