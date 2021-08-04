import React from "react";
import './App.css';
import Header from './Header';

function App() {
  return (
    // BEM naming convention
    <div className="app">
      <h1>Hello, Let's build the amazon clone</h1>
      {/* Header */}
      <Header />
      {/* Home */}
    </div>
  );
}

export default App;
