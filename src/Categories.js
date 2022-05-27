import React from 'react';

const Categories = ({ categories, filterItems }) => {
  return (
    <div className="mb-4 flex justify-center">
      {categories.map((category, index) => {
        return (
          <button
            type="button"
            className="bg-transparent border-transparent
            text-2xl capitalize tracking-wide ml-0 mr-8
            px-12 py-5 text-blue-200 cursor-pointer
            transition ease-in-out delay-150 
            hover:-translate-y-1 hover:scale-110 duration-300
            rounded font-semibold"
            key={index}
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
