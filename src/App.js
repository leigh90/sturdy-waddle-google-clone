import './App.css';
import Home from './pages/Home';
import {BrowserRouter as Router,Route, Switch } from 'react-router-dom';

function App() {
  return (
      <div className="App">
        {/* <h1>Google Clone</h1> */}

        <Router>
          <Switch>
            <Route path="/search">
                {/* SearchPage */}
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
