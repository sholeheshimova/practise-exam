import React, { createContext, useState } from 'react'


export const FavoritesContext = createContext(null)
const FavoritesProvider = ({children}) => {
    const [favorites, setFavorites] = useState([])


    const toggleFavorites = (fav) => {
        const idx = favorites.findIndex((q) => q._id === fav._id)
        if (idx === -1) {
            setFavorites([...favorites, {...fav}])
        }else{
            setFavorites([...favorites].filter((q) => q._id !== fav._id))
        }
        console.log(favorites);
        
    }
  return (
    <FavoritesContext.Provider value={{favorites, toggleFavorites}}>{children}</FavoritesContext.Provider>
  )
}

export default FavoritesProvider
