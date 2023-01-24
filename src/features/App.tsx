import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ScrollToTop } from '@components'
import { BackdropProvider } from '@contexts'
import { Home } from './Home'
import './App.css'

function App() {
  return (
    <BackdropProvider>
      <Router>
        <ScrollToTop>
          <Switch>
            <Route path="/" component={Home} />
          </Switch>
        </ScrollToTop>
      </Router>
    </BackdropProvider>
  );
}

export default App;
