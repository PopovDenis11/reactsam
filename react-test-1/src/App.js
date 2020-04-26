import React from 'react'; //подключение МОДУЛЯ JS из папки node_modules. Без относительного пути, просто модуль
import './App.css';
import Header from './Header'
import Technologies from './Technologies'

const App = () => {
  return (
    <div>
      <Header />
      <Technologies />
    </div>
  )

}

export default App;
