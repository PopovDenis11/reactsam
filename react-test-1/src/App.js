import React from 'react'; //подключение МОДУЛЯ JS из папки node_modules. Без относительного пути, просто модуль
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Profile from './components/Profile';

const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar /> 
      <Profile />
    </div>
  )

}

export default App;
