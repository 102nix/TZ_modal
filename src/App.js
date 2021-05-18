import React from 'react'
import { Route } from 'react-router-dom'
import './App.scss'
//components:
import NavbarComponent from './components/NavbarComponent/NavbarComponent'
import { PhotosContainer } from './components/Photos/PhotosContainer'
import About from './components/About/About';
import Products from './components/Products/Products';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="wrapper">
      <NavbarComponent />
      <div className="content">
        <Route exact path="/" render={() => <PhotosContainer /> } />
        <Route path="/about" render={() => <About /> } />
        <Route path="/products" render={() => <Products /> } />
      </div>
      <Footer /> 
    </div>
  );
}

export default App;