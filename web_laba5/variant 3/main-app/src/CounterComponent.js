import React, { useState } from 'react';
import './CounterComponent.css';

const CounterComponent = () => {
  const [likeCount, setLikeCount] = useState(0);
  const [dislikeCount, setDislikeCount] = useState(0);

  const handleLikeClick = () => {
    setLikeCount(likeCount + 1);
  };

  const handleDislikeClick = () => {
    setDislikeCount(dislikeCount + 1);
  };

  return (
    <div className="counter-component">
      <button className="like-button" onClick={handleLikeClick}>Одобряю</button>
      <span className="count">{likeCount}</span>

      <button className="dislike-button" onClick={handleDislikeClick}>Не одобряю</button>
      <span className="count">{dislikeCount}</span>
    </div>
  );
};

export default CounterComponent;
