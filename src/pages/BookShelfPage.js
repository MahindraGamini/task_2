import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function PersonalBookshelfPage() {
  const [bookshelf, setBookshelf] = useState([]);

  useEffect(() => {
    const storedBooks = JSON.parse(localStorage.getItem('bookshelf')) || [];
    setBookshelf(storedBooks);
  }, []);

  return (
    <div className="container mx-auto mt-8 px-4">
      <h1 className="text-3xl font-bold mb-4">Library</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {bookshelf.map((book, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-2">{book.title}</h3>
            <p className="text-gray-700">{book.author_name?.[0]}</p>
          </div>
        ))}
      </div>
      <Link to="/" className="text-blue-500 hover:underline mt-4 inline-block">
        Back to Search
      </Link>
    </div>
  );
}

export default PersonalBookshelfPage;
