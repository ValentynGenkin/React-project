import React, { createContext, useContext, useState } from 'react';

const ShoppingListContext = createContext();

export function useShoppingList() {
  return useContext(ShoppingListContext);
}

export function ShoppingListProvider({ children }) {
  let savedShoppingList = {};

  if (localStorage.length === 0) {
    savedShoppingList = {};
  } else {
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const value = localStorage.getItem(key);
      if (key !== value) {
        savedShoppingList[key] = JSON.parse(value);
      }
    }
  }

  const [groceryList, setGroceryList] = useState(savedShoppingList);
  const [checkedItems, setCheckedItems] = useState({});

  return (
    <ShoppingListContext.Provider
      value={{ groceryList, setGroceryList, checkedItems, setCheckedItems }}
    >
      {children}
    </ShoppingListContext.Provider>
  );
}
