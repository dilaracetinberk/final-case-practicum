import { useState } from "react";
import useStarship from "../context/StarshipContext";
import { BsSearch } from "react-icons/bs";

function Form() {
  const { setSearch } = useStarship();
  const [searchInput, setSearchInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!searchInput) {
      return;
    }
    setSearch(searchInput);
    setSearchInput("");
  };

  return (
    <form className="w-full max-w-md mx-auto" onSubmit={handleSubmit}>
      <div className="relative">
        <div className="icon absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <BsSearch />
        </div>
        <input
          type="text"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="block w-full p-4 pl-10 text-sm focus:outline-none text-cyan-500 font-bold rounded-sm bg-zinc-900 appearance-none  border-none"
          placeholder="Search..."
          required
        />
      </div>
    </form>
  );
}

export default Form;
