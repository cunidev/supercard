import React from 'react';
import './styles/App.css';
import CardManager from './components/CardManager';
import ScanCard from './components/ScanCard';
import Supercard from './components/Supercard';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/scan">
            <ScanCard />
          </Route>
          <Route path="/supercard">
            <Supercard />
          </Route>
          <Route path="/">
            <CardManager />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;