import React from 'react';

// destructure items from props
const Menu = ({ items }) => {
  return (
    <div className='section-center'>
      {/* iterate over items */}
      {items.map((item) => {
        // destructure necessary properties from item
        const { id, title, img, desc, price } = item;
        return (
          <article key={id} className='menu-item'>
            <img src={img} alt={title} className='photo' />
            <div className='item-info'>
              <header>
                <h4>{title}</h4>
                <h4 className='price'>{price}</h4>
              </header>
              <p>{desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;