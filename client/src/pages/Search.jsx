import BookResultCard from '../components/BookResultCard';

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

      <div className="row">
          <div className="col-sm-10 offset-sm-1">
              <div style={{marginTop: '40px', padding: '20px', border:'1px solid lightgrey', width: '100%', height: 'auto'}}>
                  <h2>Results</h2>
                  <BookResultCard />
              </div>
          </div>
      </div>




    </div>
    
    
  );
}
