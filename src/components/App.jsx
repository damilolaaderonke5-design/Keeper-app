import React from 'react';

import './App.css';
import Header from './Header';
import Note from './Note';
import Footer from './Footer';

function App() {
  return (
    <div>
      <Header />
      <Note title="Market List" content="Buy Milk, Egg, Bread, Spoon." />
      <Note title="Vegetable List" content="Buy Pawpaw, cabbage, carrot, spring onions." />
      <Footer />
    </div>
  );
}

export default App;
