import React from 'react';

const Categories = ({ categories, filterItems }) => {
  return (
    <div className='btn-container'>
    {/* Display buttons for each category, loose coupling */}
      {categories.map((category, index) => {
        return <button type="button" className="filter-btn" key={index} onClick={() => filterItems(category)}>{category}</button>
      })}
    </div>
  );
};

export default Categories;
