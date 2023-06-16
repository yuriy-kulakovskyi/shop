import React from 'react';

// styles
import './Header.css';

export default function Header() {
  return (
    <div>
    <header>
        <div>
          <span className='logo'>House Staff</span>
        </div>
        <nav>
          <ul>
              <li>Головна</li>
              <li>Товари</li>
              <li>Акції</li>
              <li>Правила</li>
              <li>Про нас</li>
              <li>Контакти</li>
              <li>Кабінет</li>
          </ul>
        </nav>
        
        {/* burger button */}
        <div className="burger">
          <span></span>
          <span></span>
          <span></span>
        </div>
    </header>
    <div className="presentation">
        <h1>Кращі товари для дому</h1>
        <p>за низькими цінами</p>
        <button>Переглянути</button>
    </div>
    </div>
  )
}
