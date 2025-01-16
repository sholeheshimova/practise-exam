import React, { useContext, useState } from 'react'
import { FavoritesContext } from '../../context/FavoritesContext'
import { Grid2 } from '@mui/material'
import { FaRegHeart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import styles from './index.module.scss'

const Favorites = () => {

   const {favorites, toggleFavorites} = useContext(FavoritesContext)
  return (
<>
<div className={styles.foods}>

    <Grid2 container spacing={2} >
        {favorites.length> 0 && favorites.map((f) => {
            return (
                <Grid2  size={3} key={f._id}>
              
                   <div  className={styles.food}>
                   <div className={styles.imgs}>
                    <img src={f.image} alt="" width={100} />
                   </div>
                   <div className={styles.text}>
                    <h3>{f.title}</h3>
                    <br />
                    <h5>{f.description}</h5>
                    <br />
                    <p><span>Price: {f.price}</span></p>
                   </div>
                
                   <Link to={`/${f._id}`}> <button className={styles.btn1} >Details</button></Link>
                   <button className={styles.btn2} onClick={() => {toggleFavorites(f)}}><FaRegHeart /></button>
                   
                   </div>
                   
                   
                </Grid2>
            )
        })}
    </Grid2>
   
 </div>
</>
  )
}

export default Favorites
