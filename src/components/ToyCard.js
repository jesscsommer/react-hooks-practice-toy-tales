import React from "react";

const ToyCard = ({ toy, updateToys }) => {
  const {name, image, likes, id } = toy

  const handleDelete = () => {
      fetch(`http://localhost:3001/toys/${id}`, {
        method: 'DELETE'
      })
      .then(() => updateToys(toy))
      .catch(err => console.error(err))
  }

  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button className="like-btn">Like {"<3"}</button>
      <button onClick={handleDelete} className="del-btn">Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
