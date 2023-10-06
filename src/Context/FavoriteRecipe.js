import React, { createContext, useContext, useState } from 'react';

const SelectFavorite = createContext();

export function useSelectFavorite() {
  return useContext(SelectFavorite);
}

export function SelectFavoriteProvider({ children }) {
  let favoriteId = [];

  if (localStorage.length === 0) {
    favoriteId = [];
  } else {
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const value = localStorage.getItem(key);
      favoriteId.push(parseInt(value));
    }
  }

  const [favorite, setFavorite] = useState(favoriteId);

  return (
    <SelectFavorite.Provider value={{ favorite, setFavorite }}>
      {children}
    </SelectFavorite.Provider>
  );
}
