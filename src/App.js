import React from 'react';
import Header from './components/Header';
import Counter from './components/Counter';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Counter />
      </main>
      <Footer />
    </div>
  );
}

export default App;