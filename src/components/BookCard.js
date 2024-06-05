import React from 'react';

function BookCard({ book, addToBookshelf }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h3 className="text-lg font-semibold mb-2">{book.title}</h3>
      <p className="text-gray-700">{book.author_name?.[0]}</p>
      <button
        onClick={() => addToBookshelf(book)}
        className="mt-2 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        Add to Bookshelf
      </button>
    </div>
  );
}

export default BookCard;
