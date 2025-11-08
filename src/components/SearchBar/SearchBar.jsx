import React from 'react';

function SearchBar() {
    return (
    <div className="relative bg-[url('/ravenous-bg.jpg')] bg-cover bg-center h-[480px] w-full flex flex-col items-center justify-center mb-10">
       <div className="relative z-10 flex flex-row gap-3 items-center mt-10">
        <input 
          className="bg-white text-black w-80 h-12 pl-5 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400 " 
          type="text" 
          placeholder="Search for a business" 
        />
        <input 
          className="bg-white text-black w-80 h-12 pl-5 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400" 
          type="text" 
          placeholder="Where?" 
        /> 
      </div>
      <button className="bg-[#C49847] text-white px-8 h-12 rounded-md font-medium transition shadow-md mt-5">
          Let&apos;s Go
        </button>
    </div>
    );
}

export default SearchBar;