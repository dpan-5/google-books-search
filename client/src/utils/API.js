import axios from 'axios';

export default {
    bookSearch: function(query) {
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
    },
    saveBook: function(book) {
        return axios.post('/api/books', book);
    },
    getBooks: function() {
        return axios.get('/api/books');
    },
    deleteBook: function(bookId) {
        return axios.delete('/api/books', { data: {bookId} });
    }

}

