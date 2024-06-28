import React from 'react';
import PartsOfSpeech from '../PartsOfSpeech/Index';
import Footer from '../Footer/Index';
import Searching from '../Searching/Index';
import { groupedMeanings } from '../../utils/groupMeanings';

interface Phonetic {
  text: string;
  audio: string;
}

interface Meaning {
  partOfSpeech: string;
  definitions: { definition: string; example?: string }[];
  synonyms: string[];
  antonyms: string[];
}

interface Content {
  phonetics: Phonetic[];
  word: string;
  phonetic: string;
  meanings: Meaning[];
}

interface IndexProps {
  searching: boolean;
  idle: boolean;
  notFound: boolean;
  content?: Content;
}

const Index: React.FC<IndexProps> = ({
  searching,
  idle,
  notFound,
  content,
}) => {
  if (idle) {
    return <main className="main"></main>;
  }
  if (notFound) {
    return <main className="main"></main>;
  }
  if (searching) {
    return (
      <main className="main">
        <Searching />
      </main>
    );
  } else if (!searching && content) {
    return (
      <main className="main">
        <PartsOfSpeech meanings={groupedMeanings(content.meanings)} />
        <Footer />
      </main>
    );
  } else {
    return <main className="main"></main>;
  }
};

export default Index;
