import React from 'react'
import Goods from './Goods';
const goods = [

  { 
    title: "Крісло", 
    price: 300,
  },

  { 
    title: "Стілець", 
    price: 320
  }
];
export default function GoodsContainer() {
  return (
     <div className="GoodsContainer">
        {goods.map(item => <Goods key={item.title} title={item.title} />)}
      </div>
  )
}
