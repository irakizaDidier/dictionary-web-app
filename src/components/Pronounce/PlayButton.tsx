import React from 'react';
import './PlayButton.css';

interface Props {
  onClick: () => void;
}

const PlayButton: React.FC<Props> = ({ onClick }) => {
  return (
    <button className="play-button" onClick={onClick}>
      <span></span>
    </button>
  );
};

export default PlayButton;
