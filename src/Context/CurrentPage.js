import React, { createContext, useContext, useState } from 'react';

const CurrentPage = createContext();

export function useCurrentPage() {
  return useContext(CurrentPage);
}

export function CurrentPageProvider({ children }) {
  const [currentPage, setCurrentPage] = useState({
    page: 1,
    offset: 0,
    savePosition: false,
  });

  return (
    <CurrentPage.Provider value={{ currentPage, setCurrentPage }}>
      {children}
    </CurrentPage.Provider>
  );
}
