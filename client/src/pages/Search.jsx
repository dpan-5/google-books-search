import BookResultCard from "../components/BookResultCard";
import { useState, useEffect } from "react";
import API from "./../utils/API";

export default function Search() {
  const [search, setSearch] = useState("");
  const [booksSearchResults, setBooksSearchResults] = useState([]);

  const handleInputChange = (event) => {
    const { value } = event.target;
    setSearch(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    API.bookSearch(search)
      .then((res) => setBooksSearchResults(res.data.items))
      .catch((err) => console.log(err));
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-8 offset-sm-2">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label for="exampleInputEmail1">Book Search</label>
              <input
                type="text"
                className="form-control"
                id="bookSearchInput"
                aria-describedby="bookSearch"
                onChange={handleInputChange}
                value={search}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>

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
            <h2>Results</h2>
            {booksSearchResults === undefined || booksSearchResults.length === 0
              ? "No Results Found"
              : booksSearchResults.map((book) => {
                  return (
                    <BookResultCard
                      bookId={book.id}
                      title={book.volumeInfo.title}
                      authors={book.volumeInfo.authors}
                      description={book.volumeInfo.description}
                      image={book.volumeInfo.imageLinks.thumbnail}
                      link={book.volumeInfo.previewLink}
                    />
                  );
                })}
          </div>
        </div>
      </div>
    </div>
  );
}
