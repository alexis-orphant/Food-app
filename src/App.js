import React from 'react'
import Cards from './components/Cards';
import Category from './components/Category';
import Food from './components/Food';
import Hero from './components/Hero';
import NavBar from './components/NavBar';

function App() {
  return (
    <div>
      <NavBar/>
      <Hero/>
      <Cards/>
      <Food/>
      <Category/>
    </div>
  );
}

export default App;
