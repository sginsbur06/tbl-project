import React from 'react';

const List = ({ items }) => {
  return (
    <div className='section-center'>
      {items.map((listItem) => {
        const { id, number, name, category, born, birthplace, shoots, img, desc, } = listItem;
        return (
          <article key={id} className='menu-item'>
            <img src={img} alt={name} className='photo' />
            <div className='item-info'>
              <header>
                <h4>{name}</h4>
                <h4 className='price'>${number}</h4>
              </header>
              <p className='item-text'>{category}</p>
              <p className='item-text'>Born: {born}</p>
              <p className='item-text'>Birthplace: {birthplace}</p>
              <p className='item-text'>Shoots: {shoots}</p>
              <p className='item-text'>{desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default List;
