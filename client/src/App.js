import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Jumbotron from './components/Jumbotron';
import Search from './components/Search'
import Results from './components/Results'

function App() {
  return (
    <>
      <Router>
        <div>
          <h2>Google Books
            <Link to="/">Search</Link>
            <Link to="/saved">Saved</Link>
          </h2>
          <Switch>
            <Route exact path="/">
              <Jumbotron />
              <Search />
              <Results />
            </Route>
            <Route path="/saved">
              <Jumbotron />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
