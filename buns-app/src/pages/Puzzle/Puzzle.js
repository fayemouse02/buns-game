import React, { useState } from 'react';
import './Puzzle.css';

const PUZZLE_SIZE = 3; // Adjust as needed
const IMAGE_SIZE = 600; // Image dimensions in px

const puzzles = [
  {
    imageUrl: 'linoprint.png',
    reward: '🐻 You unlocked baking bear!',
    rewardImageUrl: 'rewardstickers/bakingbear.png',
  },
  {
    imageUrl: 'linoprint.png',
    reward: '🐻 You unlocked bunny bear!',
    rewardImageUrl: 'rewardstickers/bunnybear.png',
  },
  {
    imageUrl: '/puzzle-image3.jpg',
    reward: '🐻 You unlocked distinguished bear!',
    rewardImageUrl: 'rewardstickers/distinguishedbear.png',
  },
   {
    imageUrl: '/puzzle-image3.jpg',
    reward: '🐻 You unlocked matrix bear!',
    rewardImageUrl: 'rewardstickers/matrixbear.png',
  },
   {
    imageUrl: '/puzzle-image3.jpg',
    reward: '🐻 You unlocked heart bear!',
    rewardImageUrl: 'rewardstickers/originalheartbear.png',
  },
   {
    imageUrl: '/puzzle-image3.jpg',
    reward: '🐻 You unlocked shopping bear!',
    rewardImageUrl: 'rewardstickers/shoppingbear.png',
  },
   {
    imageUrl: '/puzzle-image3.jpg',
    reward: '🐻 You unlocked slay bear!',
    rewardImageUrl: 'rewardstickers/slaybear.png',
  },
   {
    imageUrl: '/puzzle-image3.jpg',
    reward: '🐻 You unlocked swag bear!',
    rewardImageUrl: 'rewardstickers/swagbear.png',
  },
];

// Simple shuffle function
function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

const PuzzleCarousel = () => {
  const [currentPuzzle, setCurrentPuzzle] = useState(0);
  const [pieces, setPieces] = useState(() =>
    shuffle(Array.from({ length: PUZZLE_SIZE * PUZZLE_SIZE }, (_, i) => i))
  );

  const changePuzzle = (newIndex) => {
    setCurrentPuzzle(newIndex);
    setPieces(shuffle(Array.from({ length: PUZZLE_SIZE * PUZZLE_SIZE }, (_, i) => i)));
  };

  const handleDrop = (targetIndex, draggedIndex) => {
    const newPieces = [...pieces];
    [newPieces[targetIndex], newPieces[draggedIndex]] = [
      newPieces[draggedIndex],
      newPieces[targetIndex],
    ];
    setPieces(newPieces);
  };

  const checkComplete = () => {
    const correctOrder = Array.from({ length: PUZZLE_SIZE * PUZZLE_SIZE }, (_, i) => i);
    return JSON.stringify(pieces) === JSON.stringify(correctOrder);
  };

  const tileSizePx = IMAGE_SIZE / PUZZLE_SIZE;

  return (
    <div className='full-post'>
      <h2 className="text-center text-xl mb-4">🧩 Pick a Puzzle</h2>

      <div className="puzzle-grid">
        {pieces.map((pieceIndex, targetIndex) => {
          const x = pieceIndex % PUZZLE_SIZE;
          const y = Math.floor(pieceIndex / PUZZLE_SIZE);

          return (
            <div
              key={targetIndex}
              className="puzzle-tile"
              draggable={!checkComplete()}
              onDragStart={(e) => e.dataTransfer.setData('draggedIndex', targetIndex)}
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => {
                const draggedIndex = e.dataTransfer.getData('draggedIndex');
                handleDrop(targetIndex, draggedIndex);
              }}
              style={{
                backgroundImage: `url(${puzzles[currentPuzzle].imageUrl})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: `${IMAGE_SIZE}px ${IMAGE_SIZE}px`,
                backgroundPosition: `-${x * tileSizePx}px -${y * tileSizePx}px`,
                width: `${tileSizePx}px`,
                height: `${tileSizePx}px`,
                cursor: checkComplete() ? 'default' : 'grab',
              }}
            />
          );
        })}
      </div>

      <div className="controls mt-4 flex justify-center gap-4">
        <button
          onClick={() => changePuzzle((currentPuzzle - 1 + puzzles.length) % puzzles.length)}
          disabled={currentPuzzle === 0}
          className="btn"
        >
          ← Back
        </button>
        <button
          onClick={() => changePuzzle((currentPuzzle + 1) % puzzles.length)}
          disabled={currentPuzzle === puzzles.length - 1}
          className="btn"
        >
          Next →
        </button>
      </div>

      {checkComplete() && (
        <div >
            <div className="completion-message mt-4">
                🎉 {puzzles[currentPuzzle].reward} 🎉
                <br></br>
                <br></br>
                <img
                    src={puzzles[currentPuzzle].rewardImageUrl}
                    alt="Reward"
                    className="reward-image mt-2"
                />
           </div>
          <br></br>
          <br></br>
          <p>The quickest way to add this as a sticker in whatsapp is to login through the browser <a style={{color: '#ff8fc4'}} href="https://web.whatsapp.com/" target="_blank" rel="noopener noreferrer">here</a>!</p>
          <p>Go to a chat, view your stickers, then click the + to add the sticker!</p>
          <p>If you're having trouble doing this, let me know and I can add them for you :)</p>

        </div>
      )}
    </div>
  );
};

export default PuzzleCarousel;
