import { Routes, Route } from 'react-router-dom';
import Header from '@/components/Header'
import AllCats from '@/pages/AllCats/AllCats.jsx'
import FavoriteCats from '@/pages/FavoriteCats/FavoriteCats.jsx'

function App() {

  return (
    <>
        <Header />
        <main>
            <Routes>
                <Route path="/" element={<AllCats />} />
                <Route path="/favorites" element={<FavoriteCats /> } />
            </Routes>
        </main>
    </>
  )
}

export default App
