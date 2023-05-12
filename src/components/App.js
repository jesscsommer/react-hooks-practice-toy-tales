import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

const App = () =>  {

  //! Get and set toys on first render
  const [toys, setToys] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/toys')
    .then(res => res.json())
    .then(setToys)
    .catch(err => console.error(err))
  }, [])


//! Toggle form, add toy on submission
  const [showForm, setShowForm] = useState(false);

  const handleClick = () => {
    setShowForm((showForm) => !showForm);
  }

  const updateToys = (updatedToy) => {
    if (toys.includes(updatedToy)) {
      setToys(toys => toys.filter(toy => toy.id !== updatedToy.id))
    } else {
      setToys(toys => [updatedToy, ...toys])
    }
  }

  const mapToys = (updatedToy) => {
    setToys(toys => toys.map(toy => toy.id === updatedToy.id ? updatedToy : toy))
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm updateToys={updateToys} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} updateToys={updateToys} mapToys={mapToys} />
    </>
  );
}

export default App;
