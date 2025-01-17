import React, { createContext, useState } from 'react'


export const FavoritesContext = createContext(null)
const FavoritesProvider = ({children}) => {
    const [favorites, setFavorites] = useState([])

    const toggleFavorites = (cloth) => {
        const idx = favorites.findIndex((q) => q._id === cloth._id)
        if (idx === -1) {
            setFavorites([...favorites , {...cloth}])
        }else{
            setFavorites([...favorites].filter((q) => q._id !== cloth._id))
        }
    }
  return (
   <>
   <FavoritesContext.Provider value={{favorites, toggleFavorites}}>{children}</FavoritesContext.Provider>
   </>
  )
}

export default FavoritesProvider
