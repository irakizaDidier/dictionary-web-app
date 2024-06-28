import React from 'react';
import PartOfSpeech from '../PartOfSpeech/Index';

interface MeaningItem {
  [key: string]: {
    definitions: {
      definition: string;
      example?: string;
    }[];
    synonyms: string[];
  };
}

interface Props {
  meanings: MeaningItem;
}

const Index: React.FC<Props> = ({ meanings }) => {
  console.log(meanings);

  const items: { title: string; content: any }[] = [];

  Object.keys(meanings).forEach((partOfSpeech) => {
    const item = meanings[partOfSpeech];
    const singleItem = {
      title: partOfSpeech,
      content: item,
    };
    items.push(singleItem);
  });

  return (
    <div className="parts-of-speech">
      {items && items.length > 0 && (
        <>
          {items.map((item, index) => (
            <PartOfSpeech key={index} item={item} />
          ))}
        </>
      )}
    </div>
  );
};

export default Index;
