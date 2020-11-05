export default function Search() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-8 offset-sm-2">
          <form>
            <div class="form-group">
              <label for="exampleInputEmail1">Book Search</label>
              <input
                type="text"
                class="form-control"
                id="bookSearchInput"
                aria-describedby="bookSearch"
              />
            </div>
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
