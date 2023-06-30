import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { FaMountain, FaCamera, FaPlane } from 'react-icons/fa';
import './App.css';

const Home = () => (
  <div className="page">
    <h1>Добро пожаловать на нашу страницу путешествий!</h1>
    <p>Отправляйтесь в незабываемые приключения и исследуйте потрясающие места вместе с нами.</p>
    <Link to="/about" className="btn">Узнать больше</Link>
  </div>
);

const About = () => (
  <div className="page">
    <h1>О нас</h1>
    <p>Мы - команда энтузиастов, готовых поделиться своими путешественническими приключениями со всеми желающими.</p>
    <Link to="/" className="btn">На главную</Link>
  </div>
);

const Destinations = () => (
  <div className="page">
    <h1>Популярные направления</h1>
    <ul className="destination-list">
      <li>
        <FaMountain className="destination-icon" />
        <h2>Горные пейзажи</h2>
        <p>Попробуйте свои силы в альпинизме и насладитесь потрясающими видами с горных вершин.</p>
      </li>
      <li>
        <FaCamera className="destination-icon" />
        <h2>Исторические места</h2>
        <p>Погрузитесь в прошлое и изучите уникальные исторические места и памятники.</p>
      </li>
      <li>
        <FaPlane className="destination-icon" />
        <h2>Экзотические путешествия</h2>
        <p>Отправьтесь в незабываемые экзотические страны и познакомьтесь с их культурой и традициями.</p>
      </li>
    </ul>
    <Link to="/" className="btn">На главную</Link>
  </div>
);

const App = () => (
  <Router>
    <nav>
      <ul className="nav-links">
        <li><Link to="/">Главная</Link></li>
        <li><Link to="/about">О нас</Link></li>
        <li><Link to="/destinations">Популярные направления</Link></li>
      </ul>
    </nav>
    <Route path="/" exact component={Home} />
    <Route path="/about" component={About} />
    <Route path="/destinations" component={Destinations} />
  </Router>
);

export default App;
