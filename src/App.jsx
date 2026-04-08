import { useState } from 'react'
import Header from '@/components/Header'
import CatCardGrid from '@/components/CatCardGrid'

function App() {
  const [count, setCount] = useState(0)

const mockCats = [
    { id: 1, url: 'https://cdn2.thecatapi.com/images/bi.jpg' },
    { id: 2, url: 'https://cdn2.thecatapi.com/images/bi.jpg' },
    { id: 3, url: 'https://cdn2.thecatapi.com/images/6sn.jpg' },
    { id: 4, url: 'https://cdn2.thecatapi.com/images/6sn.jpg' },
    { id: 5, url: 'https://cdn2.thecatapi.com/images/6sn.jpg' },
    { id: 6, url: 'https://cdn2.thecatapi.com/images/6sn.jpg' },
    { id: 7, url: 'https://cdn2.thecatapi.com/images/6sn.jpg' },
    { id: 8, url: 'https://cdn2.thecatapi.com/images/6sn.jpg' },
    { id: 9, url: 'https://cdn2.thecatapi.com/images/6sn.jpg' },
    { id: 10, url: 'https://cdn2.thecatapi.com/images/6sn.jpg' },
    { id: 11, url: 'https://cdn2.thecatapi.com/images/6sn.jpg' },
]

  return (
    <>
      <Header />
      <CatCardGrid cats={mockCats}/>
    </>
  )
}

export default App
