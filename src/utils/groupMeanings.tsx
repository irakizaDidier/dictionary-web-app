interface MeaningItem {
  partOfSpeech: string;
  definitions: { definition: string; example?: string }[];
  synonyms: string[];
  antonyms: string[];
}

interface GroupedMeanings {
  [partOfSpeech: string]: {
    definitions: { definition: string; example?: string }[];
    synonyms: string[];
    antonyms: string[];
  };
}

export const groupedMeanings = (meanings: MeaningItem[]): GroupedMeanings => {
  return meanings.reduce((acc: GroupedMeanings, item: MeaningItem) => {
    if (acc[item.partOfSpeech]) {
      acc[item.partOfSpeech] = {
        definitions: [
          ...acc[item.partOfSpeech].definitions,
          ...item.definitions,
        ],
        synonyms: [...acc[item.partOfSpeech].synonyms, ...item.synonyms],
        antonyms: [...acc[item.partOfSpeech].antonyms, ...item.antonyms],
      };
    } else {
      acc[item.partOfSpeech] = {
        definitions: item.definitions,
        synonyms: item.synonyms,
        antonyms: item.antonyms,
      };
    }
    return acc;
  }, {});
};
