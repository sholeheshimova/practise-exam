import React from 'react'
import styles from './index.module.scss'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
<>
<header>
    <div className={styles.header}>
        <div className={styles.logo}>
            <h1 className={styles.head1}>Color</h1>
            <h1 className={styles.head2}>Shop</h1>
        </div>
        <nav>
            <ul>
                <li>
                    <NavLink to={"/"}>Home</NavLink>
                </li>
                <li>
                    <NavLink to={"/favorites"}>Favorites</NavLink>
                </li>
                <li>
                    <NavLink to={"/add"}>Add</NavLink>
                </li>
        
            </ul>
        </nav>
    </div>
</header>
</>
  )
}

export default Header
