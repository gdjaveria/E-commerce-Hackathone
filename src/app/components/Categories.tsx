import React from "react";

interface SearchDownProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  categories: string[];
}

const Categories: React.FC<SearchDownProps> = ({
  searchTerm,
  setSearchTerm,
  selectedCategory,
  setSelectedCategory,
  categories,
}) => {
  return (
    <div className="flex justify-between items-center mb-6">
      <input
        type="text"
        placeholder="Searching Products ......"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-1/3 p-3 border rounded-full shadow-md focus:outline-0 focus:ring-4 focus:ring-gray-500  border-slate-800"
      />

      <select
        value={selectedCategory}
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
          setSelectedCategory(e.target.value)
        }
        className="w-1/3 p-3 rounded-full shadow-md focus:outline-0 focus:ring-4 focus:ring-gray-500 border-slate-800"
      >
        <option value="  ">All Categories</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Categories;
