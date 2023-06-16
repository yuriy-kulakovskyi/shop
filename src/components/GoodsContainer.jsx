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
  },

  {
    title: "Диван",
    price: 1000,
    img: "https://www.boconcept.com/on/demandware.static/-/Sites-master-catalog/default/dw736adf25/images/1560000/1560164.jpg",
    color: "gray",
    count: 1,
    sale: true
  },

  {
    title: "Крісло",
    price: 300,
    img: "https://constanta.ua/7048-large_default/kreslo-monreal.jpg",
    color: "white",
    count: 1,
    sale: false
  },

  {
    title: "Стілець",
    price: 320,
    img: "https://content2.rozetka.com.ua/goods/images/big/222043941.jpg",
    color: "gray",
    count: 1,
    sale: true
  },

  {
    title: "Стіл з електрорегулюванням LITE",
    price: 137700,
    img: "https://www.stiystil.com.ua/wp-content/webp-express/webp-images/uploads/2022/05/lite_7620-696x532.jpg.webp",
    color: "black",
    count: 3,
    sale: false
  },

  {
    title: "Регульований стіл ADAPWORK SmartDesk 138х68 Дуб Аппалачі, Білий (106735885)",
    price: 11999,
    img: "https://kupistul.ua/public/cache/610x610/reguliruemiy-stol-adapwork-smartdesk-138h68-dub-appalachi-beliy-106735885-3219.jpg?v1",
    color: "white",
    count: 2,
    sale: true
  },

  {
    title: "Стіл з електрорегулюванням PRO",
    price: 18045,
    img: "https://www.stiystil.com.ua/wp-content/uploads/2021/01/and_1259-kkk-1-e1634556554114.jpg",
    color: "black",
    count: 4,
    sale: true
  },

  {
    title: "Стіл з електрорегулюванням LITE",
    price: 13770,
    img: "https://www.stiystil.com.ua/wp-content/webp-express/webp-images/uploads/2022/05/lite_7626-696x532.jpg.webp",
    color: "white",
    count: 2,
    sale: false
  },

  {
    title: "Giroflex 353-4029",
    price: 33250,
    img: "https://www.stiystil.com.ua/wp-content/uploads/2022/10/giroflex-353-4029_1949.jpg",
    color: "black",
    count: 10,
    sale: true
  }
];
export default function GoodsContainer() {
  return (
     <div className="GoodsContainer">
        {goods.map(item => <Goods 
                              key={item.title} 
                              title={item.title} 
                              price={item.price}
                              img={item.img}
                              color={item.color}
                              count={item.count}
                              sale={sale}
                            />
        )}
      </div>
  )
}
