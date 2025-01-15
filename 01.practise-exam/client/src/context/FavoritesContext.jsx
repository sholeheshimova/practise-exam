import React, { createContext, useState } from "react";

export const FavoritesContext = createContext();
const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorites = (favorite) => {
    const idx = favorites.filter((q) => q._id === favorite._id);
    if (idx === -1) {
      setFavorites([...favorites, { ...favorite }]);
    } else {
      setFavorites([...favorites].filter((q) => q._id !== favorite._id));
    }
  };

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesProvider;
