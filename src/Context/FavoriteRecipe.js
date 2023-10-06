import React, { createContext, useContext, useState } from 'react';

const SelectFavorite = createContext();

export function useSelectFavorite() {
  return useContext(SelectFavorite);
}

export function SelectFavoriteProvider({ children }) {
  const [favorite, setFavorite] = useState([]);

  return (
    <SelectFavorite.Provider value={{ favorite, setFavorite }}>
      {children}
    </SelectFavorite.Provider>
  );
}
