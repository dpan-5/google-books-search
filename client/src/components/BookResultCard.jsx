import { useState } from "react";
import API from "../utils/API";

export default function BookResultCard({
  bookId,
  title,
  authors,
  description,
  image,
  link,
  favoriteBook,
  loadBooks
}) {
  const [book, setBook] = useState({
    bookId,
    title,
    authors,
    description,
    image,
    link,
  });

  const handleSave = () => {
    API.saveBook(book);
  };

  const handleDelete = () => {
    API.deleteBook(book.bookId);
    loadBooks();
  }

  return (
    <div className="card mb-3" style={{ width: "100%" }}>
      <div className="row no-gutters">
        <div className="col-md-2">
          <a href={link} target="_blank">
            <img
              src={image}
              className="card-img"
              alt="..."
              style={{ maxHeight: "200px", maxWidth: "200px" }}
            />
          </a>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h3 className="card-title">{title}</h3>
            <h6 className="card-title text-muted">Written by {authors}</h6>
            <p className="card-text">
              {description === undefined
                ? ""
                : description.substr(0, 200) + "..."}
            </p>
          </div>
        </div>
        <div className="col-md-2">
          <button
            type="button"
            className="btn btn-secondary"
            style={{ margin: "30px" }}
          >
            View
          </button>
          {favoriteBook === undefined ? (
            <button
              type="button"
              className="btn btn-secondary"
              style={{ margin: "30px" }}
              onClick={handleSave}
            >
              Save
            </button>
          ) : (
            <button
              type="button"
              className="btn btn-secondary"
              style={{ margin: "30px" }}
              onClick={handleDelete}
            >
              Delete
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
