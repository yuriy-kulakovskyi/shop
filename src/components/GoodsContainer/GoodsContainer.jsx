import React from 'react'
import Goods from '../Goods/Goods';

// styles
import './GoodsContainer.css';

export default function GoodsContainer({ goods }) {
  return (
     <div className="GoodsContainer">
        {goods.map(item => <Goods 
                              key={item.title} 
                              title={item.title} 
                              price={item.price}
                              img={item.img}
                              color={item.color}
                              count={item.count}
                              sale={item.sale}
                            />
        )}
      </div>
  )
}
