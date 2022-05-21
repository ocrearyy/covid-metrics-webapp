import React from 'react';
import { BsSearch as SearchIcon } from 'react-icons/bs';

const Search = () => {
  const searcher = (e) => {
    const allElements = document.querySelectorAll('.home h2');
    if (e.target.value) {
      allElements.forEach((i) => {
        const result = i.textContent.toLowerCase().includes(e.target.value.toLowerCase());
        if (result) {
          const parent = i.parentElement.parentElement;
          parent.style.display = 'block';
        } else {
          const parent = i.parentElement.parentElement;
          parent.style.display = 'none';
        }
      });
    } else {
      allElements.forEach((i) => {
        const papa = i.parentElement.parentElement;
        papa.style.display = 'block';
      });
    }
  };

  return (
    <form>
      <SearchIcon className="search-icon" />
      <input type="search" name="search" id="search" placeholder="Search by Country..." onChange={(e) => searcher(e)} />
    </form>
  );
};

export default Search;
