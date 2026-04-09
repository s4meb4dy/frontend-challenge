import { useState, useEffect } from 'react';
import CatCardGrid from '@/components/CatCardGrid'


const FavoriteCats = () => {
    const [favoriteCats, setFavoriteCats] = useState([])

    const loadFavorites = () => {
        const saved = JSON.parse(localStorage.getItem('favoriteCats')) || []
        setFavoriteCats(saved)
    }

    useEffect(() => {
        loadFavorites()
    }, [])

    return (
        <>
            {favoriteCats.length > 0 ? (
                <CatCardGrid
                    cats={favoriteCats}
                    showLoader={false}
                    onUpdate={loadFavorites}
                />
            ) : (
                <div style={{ textAlign: 'center', marginTop: 50 }}>
                    <p>Добавьте котика в избранное, пожалуйста. Им скучно без вас</p>
                </div>
            )}
        </>
    )
}

export default FavoriteCats