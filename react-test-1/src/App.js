import React from 'react'; //подключение МОДУЛЯ JS из папки node_modules. Без относительного пути, просто модуль
import './App.css';


const App = () => {
  return (
    <div className='app-wrapper'>
      <header className='header'>
        <img src="" alt='logo'/>
      </header>
      <nav className='nav'>
        <div>
          <a href="#">Profile</a>
          </div>
        <div>
          <a href="#">Messages</a>
        </div>
        <div>
          <a href="#">News</a>
        </div>
        <div>
          <a href="#">Music</a>
        </div>
        <div>
          <a href="#">Settings</a>
        </div>
      </nav>
      <div className='content'>
        Main content
      </div>

    </div>
  )

}

export default App;
