import React, { useState } from 'react';
import styles from './CatCard.module.scss';

const CatCard = ({ url }) => {
    const [isFavorite, setIsFavorite] = useState(false);

    const addFav = (e) => {
        e.stopPropagation();
        setIsFavorite(!isFavorite);
    }

    return (
        <div className={styles.card}>
            <img src={url} alt="kotik" className={styles.image}/>
            <button
                className={`${styles.favoriteBtn} ${isFavorite ? styles.activeFavoriteBtn : ''}`}
                onClick={addFav}
            />
        </div>
    )
}

export default CatCard