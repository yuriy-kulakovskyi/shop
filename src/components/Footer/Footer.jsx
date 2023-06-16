import React from 'react'

export default function Footer() {
  const year = new Date().getFullYear();

  return (
   <footer>
    Всі права захищено {year} &copy;
   </footer>
  )
}
