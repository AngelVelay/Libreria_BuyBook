import {useEffect,useState} from 'react';
import Books from './components/Books'
import MainPage from './components/MainPage';


import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";



function App() {

  const [books, setBooks] = useState([]);

  useEffect(() => {
    
    const BookData = async() => {
        const res = await fetch(`https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${process.env.REACT_APP_BOOK_KEY}`)
        const data = await res.json();

        setBooks(data.results.books)
        console.log(data.results.books);

    }

    BookData()

  }, [])


  return (
    <Router>

      <Routes>
        <Route exact path="/" element={<MainPage/>} />
        <Route exact path="/books" element={<Books books={books}/>} />
      </Routes> 

    </Router>
  );
}

export default App;
