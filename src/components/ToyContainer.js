import React from "react";
import ToyCard from "./ToyCard";

const ToyContainer = ({ toys, updateToys }) => {

  return (
    <div id="toy-collection">{toys.map(toy => <ToyCard 
      key={toy.id}
      toy={toy}
      updateToys={updateToys}
    />)}</div>
  );
}

export default ToyContainer;
