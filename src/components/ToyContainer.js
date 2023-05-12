import React from "react";
import ToyCard from "./ToyCard";

const ToyContainer = ({ toys, updateToys, mapToys }) => {

  return (
    <div id="toy-collection">{toys.map(toy => <ToyCard 
      key={toy.id}
      toy={toy}
      updateToys={updateToys}
      mapToys={mapToys}
    />)}</div>
  );
}

export default ToyContainer;
