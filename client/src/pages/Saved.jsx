import BookResultCard from '../components/BookResultCard';
import { useEffect, useState } from 'react';
import API from '../utils/API';

export default function Saved() {

    const [books, setBooks] = useState([]);

    useEffect(() => {
      loadBooks();
    }, []);

    const loadBooks = () => {
        API.getBooks().then(res => setBooks(res.data));
    }

    return (
        <div className="row">
        <div className="col-sm-10 offset-sm-1">
          <div
            style={{
              marginTop: "40px",
              padding: "20px",
              border: "1px solid lightgrey",
              width: "100%",
              height: "auto",
            }}
          >
            <h2>Saved Books</h2>
            {books === undefined || books.length === 0
              ? "No Favorited Books"
              : books.map((book) => {
                  return (
                    <BookResultCard
                      bookId={book.bookId}
                      title={book.title}
                      authors={book.authors}
                      description={book.description}
                      image={book.image}
                      link={book.link}
                      favoriteBook={true}
                      loadBooks={loadBooks}
                    />
                  );
                })}
          </div>
        </div>
      </div>
    );
}