import React from 'react';
import GlobalStyle from './globalStyles';
// eslint-disable-next-line
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/HomePage/Home';
import Services from './pages/Services/Services';
import Products from './pages/Products/Products';
import SignUp from './pages/SignUp/SignUp';
import { Navbar, Footer } from './components';
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <Router>
      <GlobalStyle/>
      <ScrollToTop/>
      <Navbar/>
      <switch>
        <Route path="/" exact component={Home} />
        <Route path="/services" exact component={Services} />
        <Route path="/products" exact component={Products} />
        <Route path="/sign-up" exact component={SignUp} />
      </switch>
      <Footer/>
    </Router>
  );
}

export default App;
