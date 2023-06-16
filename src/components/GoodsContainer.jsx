import React from 'react'
import Goods from './Goods';
const goods = [

  { 
    title: "Крісло", 
    price: 300,
    img: "https://images.pexels.com/photos/276534/pexels-photo-276534.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    color: "white",
    count: 1,
    sale: true
  },

  { 
    title: "Стілець", 
    price: 320,
    img: "https://concepto.com.ua/image/catalog/products/pavlyk/01_chairs/diran/diran-01.jpg",
    color: "brown",
    count: 1,
    sale: false
  }
];
export default function GoodsContainer() {
  return (
     <div className="GoodsContainer">
        {goods.map(item => <Goods key={item.title} title={item.title} />)}
      </div>
  )
}
