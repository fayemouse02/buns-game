import React, { useState } from 'react';
import './Puzzle.css';

const PUZZLE_SIZE = 5; // 3x3 grid
const IMAGE_SIZE = 600; // 600px x 600px image

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

const Puzzle = () => {
  const correctOrder = Array.from({ length: PUZZLE_SIZE * PUZZLE_SIZE }, (_, i) => i);
  const [pieces, setPieces] = useState(shuffle([...correctOrder]));

  const handleDrop = (targetIndex, draggedIndex) => {
    const newPieces = [...pieces];
    [newPieces[targetIndex], newPieces[draggedIndex]] = [newPieces[draggedIndex], newPieces[targetIndex]];
    setPieces(newPieces);
  };

  const checkComplete = () => JSON.stringify(pieces) === JSON.stringify(correctOrder);

  return (
    <div className='full-post'>
      <h2 className="text-center text-xl mb-4">🧩 Bear & Bunny Puzzle</h2>
      <div className="puzzle-grid">
        {pieces.map((pieceIndex, targetIndex) => (
          <PuzzleTile
            key={targetIndex}
            index={targetIndex}
            pieceIndex={pieceIndex}
            imageUrl="linoprint.png" // make sure this image is 600x600 px
            onDrop={handleDrop}
          />
        ))}
      </div>
      {checkComplete() && <h3>🎉 You did it!</h3>}
    </div>
  );
};

const PuzzleTile = ({ index, pieceIndex, imageUrl, onDrop }) => {
  const tileSizePx = IMAGE_SIZE / PUZZLE_SIZE;

  const dragStart = (e) => {
    e.dataTransfer.setData('draggedIndex', index);
  };

  const drop = (e) => {
    const draggedIndex = e.dataTransfer.getData('draggedIndex');
    onDrop(index, draggedIndex);
  };

  const x = pieceIndex % PUZZLE_SIZE;
  const y = Math.floor(pieceIndex / PUZZLE_SIZE);

  return (
    <div
      className="puzzle-tile"
      draggable
      onDragStart={dragStart}
      onDragOver={(e) => e.preventDefault()}
      onDrop={drop}
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: `${IMAGE_SIZE}px ${IMAGE_SIZE}px`,
        backgroundPosition: `-${x * tileSizePx}px -${y * tileSizePx}px`,
        width: `${tileSizePx}px`,
        height: `${tileSizePx}px`,
      }}
    />
  );
};

export default Puzzle;
