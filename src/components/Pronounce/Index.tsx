import React from 'react';
import PlayButton from './PlayButton';

import './Pronounce.css';

interface Phonetic {
  audio: string;
  text?: string;
}

interface Props {
  phonetics: Phonetic[];
  word: string;
  phonetic?: string;
}

let audio: HTMLAudioElement | null = null;

const Index: React.FC<Props> = ({ phonetics, word, phonetic }) => {
	const pronounce = () => {
		let foundPhonetic: Phonetic | null = null;
		foundPhonetic = phonetics.find((ph) => ph.audio && ph.text) || null;
	  
		if (audio !== null) {
		  audio.pause();
		  audio.currentTime = 0;
		}
	  
		if (foundPhonetic) {
		  audio = new Audio(foundPhonetic.audio);
		  audio.play();
		}
	  };	  

  return (
    <div className="pronounce">
      <div className="pronounce__text-box">
        <h1 className="pronounce__title">{word}</h1>
        {phonetic && <span className="pronounce__text">{phonetic}</span>}
      </div>
      <div className="prounounce__audio-box">
        {phonetics && phonetics.length > 0 && (
          <PlayButton onClick={pronounce} />
        )}
      </div>
    </div>
  );
};

export default Index;
