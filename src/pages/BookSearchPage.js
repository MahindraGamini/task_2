import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import BookCard from '../components/BookCard';

import Shimmer from '../shimmer/Shimmer';
import useDebounce from '../Debounce';

function BookSearchPage() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const debouncedQuery = useDebounce(query, 200);

  useEffect(() => {
    const fetchBooks = async () => {
      if (debouncedQuery.length > 1) {
        setLoading(true);
        const response = await axios.get(`https://openlibrary.org/search.json?q=${debouncedQuery}&limit=10&page=1`);
        setResults(response.data.docs);
        setLoading(false);
      } else {
        setResults([]);
      }
    };

    fetchBooks();
  }, [debouncedQuery]);

  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  const addToBookshelf = (book) => {
    const bookshelf = JSON.parse(localStorage.getItem('bookshelf')) || [];
    if (!bookshelf.some((b) => b.key === book.key)) {
      localStorage.setItem('bookshelf', JSON.stringify([...bookshelf, book]));
    }
  };

  return (
    <div className="container mx-auto mt-8 px-4">
      <h1 className="text-3xl font-bold mb-4">Search Books</h1>
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder="Search for books..."
        className="border border-gray-400 rounded-md py-2 px-4 mb-4 w-full md:w-1/2 lg:w-1/3"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {loading && <Shimmer />}
        {!loading &&
          results.map((book) => (
            <BookCard key={book.key} book={book} addToBookshelf={addToBookshelf} />
          ))}
      </div>
      <Link to="/library" className="text-blue-500 hover:underline mt-4 inline-block">
        Go to My Library
      </Link>
    </div>
  );
}

export default BookSearchPage;
