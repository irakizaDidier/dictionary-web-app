import React, { useState } from 'react';
import './App.css';
import TopBar from './components/TopBar/Index';
import SearchBox from './components/SearchBox/Index';
import Main from './components/Main/Index';

interface AppProps {}

const App: React.FC<AppProps> = () => {
  const [idle, setIdle] = useState<boolean>(true);
  const [searching, setSearching] = useState<boolean>(false);
  const [notFound, setNotFound] = useState<boolean>(false);
  const [content, setContent] = useState<any>('');

  const searchHandler = async (searchedWord: string) => {
    setSearching(true);
    setIdle(false);

    const searchUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchedWord}`;
    try {
      const response = await fetch(searchUrl);
      const jsonResponse = await response.json();
      setSearching(false);

      console.log(jsonResponse);

      if (jsonResponse.title === 'No Definitions Found') {
        setNotFound(true);
      } else {
        setNotFound(false);
        setContent(jsonResponse[0]);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setSearching(false);
      setNotFound(true);
    }
  };

  const reset = () => {
    setIdle(false);
    setSearching(false);
    setNotFound(false);
    setContent('');
  };

  return (
    <div className="container">
      <TopBar />
      <SearchBox onSearch={searchHandler} onTyping={reset} />
      <Main
        idle={idle}
        searching={searching}
        notFound={notFound}
        content={content}
      />
    </div>
  );
};

export default App;
