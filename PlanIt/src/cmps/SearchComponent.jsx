
import React, { useState, useEffect } from 'react';
import { boardService } from '../services/board/board.service.local.js'; // Adjust the import path as necessary

export function SearchComponent({ onSearchResults }) {
  const [query, setQuery] = useState('');
  const [boards, setBoards] = useState([]);

  useEffect(() => {
    // Fetch initial data
    async function fetchData() {
      const initialBoards = await boardService.query({});
      setBoards(initialBoards);
      onSearchResults(initialBoards);
    }
    fetchData();
  }, [onSearchResults]);

  const handleSearch = async (event) => {
    const query = event.target.value;
    setQuery(query);
    const filteredBoards = await boardService.query({ title: query });
    setBoards(filteredBoards);
    onSearchResults(filteredBoards);
  };

  return (
    <input
      type="text"
      value={query}
      onChange={handleSearch}
      className="search-bar"
      placeholder="Search..."
    />
  );
}
