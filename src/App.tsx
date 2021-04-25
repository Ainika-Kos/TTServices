import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import About from './pages/about';
import Articles from './pages/articles';
import Blog from './pages/blog';
import Categories from './pages/categories';
import Contacts from './pages/contacts';
import Home from './pages/home';
import News from './pages/news';
import Projects from './pages/projects';
import Services from './pages/services';

const App = () => {
  return (

    <div className="app">
      <Router>
        <div className="app__content">
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
            <Route path="/about">
              <About />
            </Route>
            <Route path="/articles">
              <Articles />
            </Route>
          </Switch>
        </div>
        <div className="app__footer">
          <Footer />
        </div>
      </Router>
    </div>
  );
};

export default App;
