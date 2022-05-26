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
      <section class="bg-white dark:bg-gray-900">
            <div class="container px-6 py-10 mx-auto">
                <h1 class="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white">Tampa Bay Lightning</h1>
          <div className="mx-auto bg-blue-800 w-5 h-1"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <List items={listItems} />
      </section>
    </main>
  );
}

export default App;
