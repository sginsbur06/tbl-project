import React, {useState} from 'react';

const Player = ({ item }) => {

  const [readBio, setReadBio] = useState(false)
  const { id, number, name, category, born, birthplace, shoots, img, desc } = item;

  return (
    <div class="py-16 bg-gradient-to-br from-green-50 to-cyan-100">  
        <article key={id} className='max-w-400'>
            <div class="p-1 rounded-xl group sm:flex space-x-6 bg-white bg-opacity-50 shadow-xl hover:rounded-2xl">
            <div className='grid gap-12 lg:grid-cols-3'>
                <div class="relative px-6 pt-10 pb-8 shadow-xl sm:max-w-lg sm:mx-auto rounded-xl sm:px-10">
                    <div class="max-w-md mx-auto">
                        <div class="divide-y divide-gray-400/50">
                            <img src={img} alt={name} class="h-56 sm:h-full w-full 
                                sm:w-12/12 object-cover object-top rounded-lg 
                                transition duration-500 group-hover:rounded-xl"/>
                        </div>
                    </div>
                </div>
            <header>
                <div class="sm:w-7/12 pl-0 p-5">
                    <div class="space-y-2">
                        <div class="space-y-4">
                            <h4 class="text-2xl font-semibold text-cyan-900">{name}</h4>
                        </div>
                    </div>
                </div>
                <h4 className='text-blue-700'>{number}</h4>
            </header>
            <header>
                <p className='text-gray-600 mb-0 pt-4'>{category}</p>
                <p className='text-gray-600 mb-0 pt-1'>Born: {born}</p>
                <p className='text-gray-600 mb-0 pt-1'>Birthplace: {birthplace}</p>
                <p className='text-gray-600 mb-0 pt-1'>Shoots: {shoots}</p>
            </header>
            </div>
            </div>
            <div className='flex items-center'>


              

                <button
                    type="button"
                    className="filter-btn"
                    onClick={() => setReadBio(!readBio)}
                >
                Bio
                </button>
                {readBio ? <p className='item-text'>{desc}</p> : <></>}

            </div>

        
        </article> 
    </div>
    
  );
};

export default Player;
