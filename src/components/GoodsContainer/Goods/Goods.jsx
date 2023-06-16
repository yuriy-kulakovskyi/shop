import React from 'react'

export default function Goods({ title, price, img, color, count, sale }) {
  return (
    <div className='goodsItem'>
      <img src={img} alt={"Image" + title} />

      <div className="item__textInfo">
        <h3>{title}</h3>
        <p>Ціна: {price} $</p>
        <p>Колір: {color}</p>
        <p>Кількість: {count}</p>
        <p>{sale ? "Ація" : "Нема акції"}</p>
      </div>
    </div>
  )
}
