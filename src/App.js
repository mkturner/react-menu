import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

// get all unique categories from data
// Use Set to ensure only unique categories included
// make sure 'all' is first as default category
const allCategories = ['all', ...new Set(items.map((item) => item.category))]

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    // 'all' button to display all categories
    if (category === 'all') {
      setMenuItems(items);
    }
    // else filter by category
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>Our Menu</h2>
          <div className='underline'></div>
        </div>
        {/* pass categories and filterItems to child as props */}
        <Categories categories={categories} filterItems={filterItems} />
        {/* Pass date into menu component */}
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
