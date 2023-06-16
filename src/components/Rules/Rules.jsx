import React from 'react';

// styles
import './Rules.css';

const Rules = () => {
  return (
    <section className='rules'>
      <h2>Правила</h2>

      <ul className="rules-list">
        <li className='rule'>
          Замовлення приймаються через сайт тільки від користувачів, які досягли повнолітнього віку.
        </li>

        <li className='rule'>
          Ціни на товари вказані в національній валюті та включають у себе всі необхідні податки.
        </li>

        <li className='rule'>
          Доставка здійснюється в межах вказаної території або країни.
        </li>

        <li className='rule'>
          Користувачі мають право повернути або обміняти товар протягом певного терміну після отримання.
        </li>
      </ul>
    </section>
  );
}

export default Rules;
