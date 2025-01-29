
import React from "react";
import { FiSearch } from "react-icons/fi";



interface SearchDownProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  categories: string[];
    onSortChange?: (sortBy: string) => void;
  }
 const SearchDown: React.FC<SearchDownProps> = ({
   searchTerm,
  setSearchTerm,
  selectedCategory,
  setSelectedCategory,
  categories,
  onSortChange,
}) => {


  return (
    <div className="flex justify-between items-center mb-6 gap-4">
    {/* Searchbar with Icon */}
    <div className="relative w-1/2">
      <input
        type="text"
        placeholder="Search for products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-1/2 p-3 pl-10 border rounded-full shadow-md focus:outline-none focus:ring-4 focus:ring-gray-500 border-slate-800"
      />
      <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600 text-xl" />
    </div>


      {/* Category Dropdown */}
      <div className="relative w-1/2">
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
         className="w-1/2 p-3 pl-10 border rounded-full shadow-md focus:outline-none focus:ring-4 focus:ring-gray-500 border-slate-800"
        >
          <option value="">All Categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
       </div>

      {/* Optional Sorting Dropdown */}
      {onSortChange && (
        <div className="relative w-1/4">
          <select
            onChange={(e) => onSortChange(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:shadow-md appearance-none bg-white"
          >
            <option value="">Sort By</option>
            <option value="price_asc">Price: Low to High</option>
            <option value="price_desc">Price: High to Low</option>
            <option value="name_asc">Name: A to Z</option>
            <option value="name_desc">Name: Z to A</option>
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <svg
              className="w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchDown;