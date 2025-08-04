// import { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Footer from './components/Footer';
import Services from './components/Services';
import Project from './components/Project';

function App() {
  return (
    <>
      <NavBar />
      <Project />
      <Services />
      <Home />
      <Footer />
    </>
  );
}

export default App;
