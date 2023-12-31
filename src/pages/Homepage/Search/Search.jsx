import { useState } from "react";
import CollegeCard from "../Colleges/CollegeCard";

const Search = () => {
  const [searchText, setSearchText] = useState("");
  const [colleges, setColleges] = useState([]);

  const handleSearch = () => {
    fetch(
      `${import.meta.env.VITE_API_LINK}/colleges/college-name/${searchText}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setColleges(data);
      });
  };
  console.log(colleges);
  return (
    <>
      <div className="max-w-xs mx-auto flex">
        <input
          type="text"
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search Colleges"
          className="input input-bordered rounded-r-none w-full"
        />
        <button
          onClick={handleSearch}
          type="button"
          className="bg-purple-500 text-white px-8 py-2 font-semibold rounded hover:bg-purple-600 duration-300 rounded-l-none"
        >
          Search
        </button>
      </div>
      <div>
        {colleges.map((college) => (
          <CollegeCard key={college._id} college={college}></CollegeCard>
        ))}
      </div>
    </>
  );
};

export default Search;
