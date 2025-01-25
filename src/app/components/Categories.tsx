import React from "react";

interface SearchDownProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  categories: string[];
}

const Categories: React.FC<SearchDownProps> = ({
  selectedCategory,
  setSelectedCategory,
  categories,
}) => {
  return (
    <div className="flex justify-between items-center mb-6">
      <select
        value={selectedCategory}
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
          setSelectedCategory(e.target.value)
        }
        className="w-1/3 p-3 rounded-md shadow-md focus:outline-0 focus:ring-2 focus:ring-gray-500 border-slate-800"
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
