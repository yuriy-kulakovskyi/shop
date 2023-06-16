import React from 'react'

export default function Goods({ title, price, img, color, count, sale }) {
  return (
    <div className='goodsItem'>
      <img src={img} alt={"Image" + title} />
      <h3>{title}</h3>
      <p>{price} $</p>
      <p>{color}</p>
      <p>{count}</p>
      <p>{sale ? "Sale" : "No sale"}</p>
    </div>
  )
}
