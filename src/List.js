import React from 'react';
import Player from "./Player.js"

const List = ({ items }) => {

  return (
    items.map(item => {
      return <Player item = {item} /> 
    }) 
  );
};

export default List;
