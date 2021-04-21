import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/header/header';
import Blog from './pages/blog';
import Categories from './pages/categories';
import Contacts from './pages/contacts';
import Home from './pages/home';
import News from './pages/news';
import Projects from './pages/projects';
import Services from './pages/services';

const App = () => {
  return (
    <Router>
      <Header /> 
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/blog">
          <Blog />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/services">
          <Services />
        </Route>
        <Route path="/news">
          <News />
        </Route>
        <Route path="/categories">
          <Categories />
        </Route>
        <Route path="/contacts">
          <Contacts />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
