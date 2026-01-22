"use client";
import { useState } from 'react';

function SearchBar() {

  const [searchTerm, setSearchTerm] = useState('');
  const [searchUbication, setSearchUbication] = useState('');
  const [sortBy, setSortBy] = useState('');

  const handleSearch = () => {
    console.log(`Searching for: ${searchTerm}, in ${searchUbication}, sorted by ${sortBy}`);
  };

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };
   

  const handleUbicationChange = (event) => {
    setSearchUbication(event.target.value);
  };

  const handleSortBy = (sortBy) => {
    setSortBy(sortBy);
  };
  

    return (
    <div className="relative bg-[url('/ravenous-bg.jpg')] bg-cover bg-center h-[480px] w-full flex flex-col items-center justify-center mb-10 ">
      <div className="text-white relative z-10 flex flex-row gap-10 items-center mt-10  font-medium">
        <button className={`border-b-2 border-[#C49847] px-8 h-12 rounded-md font-semibold transition mt-5 hover:scale-105 delay-20 hover:border-b-3
        ${sortBy === 'best_match' ? 'text-white bg-[#C49847]/80' : 'text-[#C49847] border-[#C49847]'}`}
        onClick={() => handleSortBy('best_match')} 
        >Best Match
        </button>
        <button className={` border-b-2 border-[#C49847] px-8 h-12 rounded-md font-semibold transition mt-5 hover:scale-105 delay-20 hover:border-b-3
        ${sortBy === 'rating' ? 'text-white bg-[#C49847]/80' : 'text-[#C49847] border-[#C49847]'}`}
        
        onClick={() => handleSortBy('rating')}
        >Highest Rated
        </button>
        <button className={` border-b-2 border-[#C49847] px-8 h-12 rounded-md font-semibold transition mt-5 hover:scale-105 delay-20 hover:border-b-3
        ${sortBy === 'review_count' ? 'text-white bg-[#C49847]/80' : 'text-[#C49847] border-[#C49847]'}`}
        onClick={() => handleSortBy('review_count')}
        >Most Reviewed
        </button>
      </div>
       <div className="relative z-10 flex flex-row gap-10 items-center mt-10 mb-5">
        <input 
          className="bg-white/80 text-black w-80 h-12 pl-5 border border-gray-300 rounded-md shadow-sm  focus:outline-none focus:ring-2 focus:ring-[#C49847] " 
          type="text" 
          placeholder="Search for a business" 
          value={searchTerm}
          onChange={handleInputChange}
        />
        <input 
          className="bg-white/80 text-black w-80 h-12 pl-5 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#C49847]" 
          type="text" 
          placeholder="Where?" 
          value={searchUbication}
          onChange={handleUbicationChange}
        /> 
      
      </div>
      <button className="bg-[#C49847] text-white px-8 h-12 rounded-md font-medium transition shadow-md mt-5 hover:scale-105 delay-20"
   
      onClick={handleSearch}
      >
          Let&apos;s Go
        </button>
    </div>
    );
}

export default SearchBar;