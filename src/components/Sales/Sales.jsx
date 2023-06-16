import React from 'react';

// Goods component import
import Goods from '../Goods/Goods';

// styles
import './Sales.css';

const Sales = ({ goods }) => {
  return (
    <section className='sales'>
      <h2>Акції</h2>

      {/* display goods which have sales */}
      <ul className="sales-list">
        {goods.map(item => item.sale &&
          <Goods
            key={item.title}
            title={item.title}
            price={item.price}
            img={item.img}
            color={item.color}
            count={item.count}
            sale={item.sale}
          />
        )}
      </ul>
    </section>
  );
}

export default Sales;
