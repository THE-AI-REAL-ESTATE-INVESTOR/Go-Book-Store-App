"use client";

import { useEffect, useState } from "react";

interface Book {
  id: string;
  title: string;
  author: string;
}

const Bookstore = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch(process.env.NEXT_PUBLIC_API_URL + "/books");
        if (!response.ok) throw new Error("Failed to fetch books");
        const data = await response.json();
        setBooks(data);
      } catch (err) {
        setError((err as Error).message);
      }
    };

    console.log("Fetching from:", process.env.NEXT_PUBLIC_API_URL + "/books");
    fetchBooks();
  }, []);

  if (error) {
    return <div className="text-red-500">Error: {error}</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Bookstore</h1>
      {books.length === 0 ? (
        <p>No books available</p>
      ) : (
        <ul>
          {books.map((book) => (
            <li key={book.id} className="mb-2">
              <strong>{book.title}</strong> by {book.author}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Bookstore;
