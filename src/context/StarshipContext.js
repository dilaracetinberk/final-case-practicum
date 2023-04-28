import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import Images from '../components/Images'


const StarshipContext = createContext();

export const StarshipProvider = ({ children }) => {
  
  const [search, setSearch] = useState("");
  const [starshipData, setStarshipData] = useState([]);
  const [loading, setLoading] = useState(true);
 
  const itemsToDisplay = Images.map((photo) => {
    return photo.img
   
  });
  
  const values = {
    search,
    setSearch,
    starshipData,
    setStarshipData,
    loading,
    setLoading,
    itemsToDisplay
  };

  useEffect(() => {
    // Search for starships
    const searchStarships = async () => {
      try {
        const response = await axios.get(
          `https://swapi.dev/api/starships/?search=${search}`
        );
        setStarshipData(response.data.results);
      } catch (error) {
        throw new Error(`Error: ${error}`);
      } finally {
        setLoading(false);
      }
    };

    searchStarships();
  }, [search]);

  useEffect(() => {
    // List all starships
    const listStarships = async () => {
      try {
        const response = await axios.get(`https://swapi.dev/api/starships/`);
        setStarshipData(response.data.results);
      } catch (error) {
        throw new Error(`Error: ${error}`);
      } finally {
        setLoading(false);
      }
    };
    listStarships();
  }, []);

  
  return (
    <StarshipContext.Provider value={values}>
      {children}
    </StarshipContext.Provider>
  );
};

const useStarship = () => useContext(StarshipContext);

export default useStarship;
