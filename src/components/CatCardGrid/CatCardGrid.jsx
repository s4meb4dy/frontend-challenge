import React from 'react';
import CatCard from '@/components/CatCard'
import styles from './CatCardGrid.module.scss'

const CatCardGrid = ({ cats, showLoader = true, onUpdate }) => {

    return (
        <main className={styles.container}>
            <div className={styles.grid}>
                {cats.map((cat) => (
                    <CatCard
                        key={cat.id}
                        cat={cat}
                        onUpdate={onUpdate}
                    />
                ))}
            </div>
            {showLoader && <p className={styles.loader}>... загружаем котиков ...</p>}
        </main>
    )
}

export default CatCardGrid