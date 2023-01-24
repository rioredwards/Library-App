import './App.css';
import { Link, Route, Switch } from 'react-router-dom';
import BookList from './components/book/BookList';
import BookDetail from './components/book/BookDetail.js';
import Home from './components/Home.js';

function App() {
  // TODO: Add routes to books & views
  return (
    <main className="container">
      <h1>Library CAT-alog</h1>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/books" component={BookList} />
        <Route path="/books/:id" component={BookDetail} />
      </Switch>
    </main>
  );
}

export default App;
