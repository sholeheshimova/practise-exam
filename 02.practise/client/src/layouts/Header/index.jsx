import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './index.module.scss'

const Header = () => {
  return (
    <>
    <header>
        <div className={styles.header}>
           <h2 className={styles.logo}>Tasty</h2>
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
