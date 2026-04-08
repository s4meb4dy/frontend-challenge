import React from 'react';
import CatCard from '@/components/CatCard'
import styles from './CatCardGrid.module.scss'

const CatCardGrid = ({ cats }) => {
    return (
        <main className={styles.container}>
            <div className={styles.grid}>
                {cats.map((cat, index) => (
                    <CatCard key={index} url={cat.url}/>
                ))}
            </div>
            <p className={styles.loader}>... згружаем котиков ...</p>
        </main>
    )
}

export default CatCardGrid