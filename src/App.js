import React, { useState } from 'react';
import List from './List';
import Categories from './Categories';
import list from './data';
const allCategories = ['all', ...new Set(list.map((item) => item.category))];

function App() {
  const [listItems, setListItems] = useState(list);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === 'all') {
      setListItems(list);
      return;
    }
    const newItems = list.filter((item) => item.category === category);
    setListItems(newItems);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Tampa Bay Lightning</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <List items={listItems} />
      </section>
    </main>
  );
}

export default App;
