import React from 'react';
import CounterComponent from './CounterComponent';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <h1>Мнение пользователей</h1>
      <CounterComponent />
    </div>
  );
};

export default App;
