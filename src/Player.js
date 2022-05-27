import React, {useState} from 'react';

const Player = ({ item }) => {

  const [readBio, setReadBio] = useState(false)
  const { id, number, name, category, born, birthplace, shoots, img, desc } = item;

  return (
    <div class="py-10 bg-gradient-to-br from-[#0000ff] to-[#090974]">  
        <article key={id} className='max-w-400'>
            <div class="p-1 rounded-xl group sm:flex space-x-6 bg-[#3f92d2] bg-opacity-50 shadow-xl hover:rounded-2xl">
                <div class='container mx-auto px-4'>
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
                                        <h4 class="text-2xl font-semibold text-white">{name}</h4>
                                    </div>
                                </div>
                            </div>
                                <h4 className='text-blue-200 text-4xl font-extrabold'>{number}</h4>
                        </header>
                        <header>
                            <p className='text-blue-200 font-semibold mb-0 pt-12'>{category}</p>
                            <p className='text-blue-200 font-semibold mb-0 pt-1'>Born: {born}</p>
                            <p className='text-blue-200 font-semibold mb-0 pt-1'>Birthplace: {birthplace}</p>
                            <p className='text-blue-200 font-semibold mb-0 pt-1'>Shoots: {shoots}</p>
                        </header>
                        </div>
                    </div>
                </div>
                <div className='place-items-center'>
                    <div class='container mx-auto px-4 place-self-center'>
                        <div className='grid gap-12 lg:grid-cols-3'>
                            <button
                                type="button"
                                class="mx-auto mt-2 px-4 py-2 place--self-center 
                                text-sm text-blue-200 transition-colors duration-300 
                                bg-blue-700 rounded shadow-xl hover:bg-blue-600 shadow-blue-400/30"
                                onClick={() => setReadBio(!readBio)}>
                                Bio
                            </button>
                            <p className='item-text'></p>
                            <p className='item-text'></p>
                        </div>
                        {readBio ? <p className='mx-auto mt-4 px-4 py-2 tracking-wide 
                                                place--self-center text-sm text-blue-200 
                                                transition-colors duration-300 
                                                bg-blue-700 rounded shadow-xl hover:bg-blue-600 
                                                shadow-blue-400/30'>{desc}
                                    </p> : <></>}
                </div>
            </div>
        </article> 
    </div>   
  );
};

export default Player;
