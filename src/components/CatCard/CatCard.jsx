import React, {useEffect, useState} from 'react'
import styles from './CatCard.module.scss'

const CatCard = ({ cat, onUpdate }) => {
    const [isFavorite, setIsFavorite] = useState(false)

    useEffect(() => {
        const favorites = JSON.parse(localStorage.getItem('favoriteCats')) || []
        const exists = favorites.some(fav => fav.id === cat.id)
        setIsFavorite(exists)
    }, [cat.id])

    const toggleFavorite = () => {
        const favorites = JSON.parse(localStorage.getItem('favoriteCats')) || []
        let updFavorites

        if (isFavorite) {
            updFavorites = favorites.filter(fav => fav.id !== cat.id)
        } else {
            updFavorites = [...favorites, cat]
        }

        localStorage. setItem('favoriteCats', JSON.stringify(updFavorites))
        setIsFavorite(!isFavorite)

        if (onUpdate) {
            onUpdate()
        }
    }

    return (
        <div className={styles.card}>
            <img src={cat.url} alt="kotik" className={styles.image}/>
            <button
                className={`${styles.favoriteBtn} ${isFavorite ? styles.activeFavoriteBtn : ''}`}
                onClick={toggleFavorite}
            />
        </div>
    )
}

export default CatCard