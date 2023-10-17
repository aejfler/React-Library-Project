import React, { useState, useEffect } from 'react';
import Cards from './Cards';

export default function Search() {
  const [searchPhrase, setSearchPhrase] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const searchBook = async (author) => {
    try {
      const response = await fetch(`https://wolnelektury.pl/api/authors/${author}/books/`);
      const data = await response.json();
      setSearchResults(data);
      console.log(data);
    } catch (err) {
      alert(new Error(err));
    }
  }

  const handleSearch = async () => {
    await searchBook(searchPhrase.replace(/ /g, "-").toLowerCase());
    setSearchPhrase("")
  }
  
//   useEffect(() => {
//     fetch(`https://wolnelektury.pl/api/authors/ignacy-krasicki/books/`)
//     .then( response => response.json())
//     .then(data => setSearchResults(data))


// })

  return (
    <>
      <div className='searchContainer'>
        <div className='searchBar'></div>
        <input
          className='inputSearch'
          placeholder='Search by author ...'
          value={searchPhrase}
          onChange={e => setSearchPhrase(e.target.value)}
          onKeyDown={async e => {
            if (e.key === 'Enter') {
              await handleSearch();
            }
          }}
        />
      </div>
      <Cards arrayOfBooks={searchResults} />
    </>
  );
}
