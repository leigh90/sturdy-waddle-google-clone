import './App.css';
import Home from './pages/Home';
import Search from './components/Search';

import {BrowserRouter as Router,Route, Switch } from 'react-router-dom';

function App() {
  return (
      <div className="App">
        {/* <h1>Google Clone</h1> */}

        <Router>
          <Switch>
            <Route path="/search">
               <Search/>
            </Route>
            <Route path="/">
              <Home/>
            </Route>
          </Switch>

        </Router>

      </div>
   
  );
}

export default App;
