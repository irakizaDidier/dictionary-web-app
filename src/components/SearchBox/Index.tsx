import React, {
  useState,
  useRef,
  useEffect,
  ChangeEvent,
  FormEvent,
} from 'react';

import './SearchBox.css';

interface Props {
  onSearch: (word: string) => void;
  onTyping: (value: string) => void;
}

const Index: React.FC<Props> = ({ onSearch, onTyping }) => {
  const [submitted, setSubmitted] = useState(false);
  const [searchedWord, setSearchedWord] = useState<string>('');

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (searchedWord === '') {
      setSubmitted(true);
      return;
    }

    onSearch(searchedWord);
  };

  const handleSearch = (value: string) => {
    setSearchedWord(value);
    onTyping(value);
  };

  return (
    <form
      className={`search-box ${submitted ? 'submitted' : ''}`}
      onSubmit={submitHandler}
    >
      <input
        ref={inputRef}
        placeholder="Search for any word"
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          handleSearch(e.target.value)
        }
        type="text"
        className={`search-box__input ${!searchedWord ? 'invalid' : ''}`}
      />
      {!searchedWord && (
        <span className="error-message">Whoops, can't be empty</span>
      )}
      <button type="submit" className="btn-search">
        Search
      </button>
    </form>
  );
};

export default Index;
