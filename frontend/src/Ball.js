import React, { useState } from 'react';
import axios from 'axios'; 
import './Ball.css'; 

const Ball = () => {
  const [jumping, setJumping] = useState(false);
  const [name, setName] = useState('Player'); 
  const [score, setScore] = useState(0); 
  const [ballPosition, setBallPosition] = useState({ left: 100, bottom: 100 }); 

  const handleClick = () => {
    if (!jumping) {
      setJumping(true);
      setTimeout(() => setJumping(false), 500); 
    }
  };

  const handleSave = () => {
    // Save high score to the backend
    axios.post('http://localhost:5000/api/highscores', {
      name: name,
      score: score
    })
    .then(response => {
      alert('High score saved successfully!');
    })
    .catch(error => {
      console.error('There was an error saving the high score!', error);
    });
  };

  return (
    <div className="game-container" onClick={handleClick}>
      <div 
        className={`ball ${jumping ? 'jump' : ''}`} 
        style={{ left: `${ballPosition.left}px`, bottom: `${ballPosition.bottom}px` }}
      ></div>
      <button className="save-button" onClick={handleSave}>
        Save High Score
      </button>
    </div>
  );
};

export default Ball;












