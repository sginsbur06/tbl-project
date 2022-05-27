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
      <section class="bg-gradient-to-br from-[#0000ff] to-[#090974] dark:bg-gray-900">
            <div class="container px-6 py-10 mx-auto">
                <h1 class="font-semibold text-center text-white capitalize 
                    text-6xl shadow-xl">Tampa Bay Lightning</h1>
          <div className="mx-auto bg-blue-800 w-5 h-1"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <List items={listItems} />
      </section>
    </main>
  );
}

export default App;
