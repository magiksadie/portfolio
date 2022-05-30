import React from 'react';
import {useState} from 'react';
import './index.css';
import './App.css';

import Home from './pages/Home';
import About from './pages/About';
import ContactMe from './pages/ContactMe';
import Portfolio from './pages/Portfolio';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  function renderPage() {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'about':
        return <About />;
      case 'contact':
        return <ContactMe />;
      case 'portfolio':
        return <Portfolio />;
      default:
        return <Home />;
    }
  }

  return (
    <>
    <div className="App">
      <Header />
      <main>{renderPage()}</main>
      <Footer />
    </div>
    </>
  );
}

export default App;