import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Header.module.scss'

const Header = () => {
    return(
        <header className={styles.header}>
            <nav className={styles.headerContainer}>
                <NavLink
                    to="/"
                    className={ ({ isActive }) => isActive ? `${styles.link} ${styles.activeBackground}` : styles.link }
                >
                    Все котики
                </NavLink>

                <NavLink
                    to="/favorites"
                    className={ ({ isActive }) => isActive ? `${styles.link} ${styles.activeBackground}` : styles.link }
                >
                    Любимые котики
                </NavLink>
            </nav>
        </header>
    )
}

export default Header