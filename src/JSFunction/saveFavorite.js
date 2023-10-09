export const saveFavorite = (id, favorite, setFavorite) => {
  if (!favorite.includes(id)) {
    setFavorite([...favorite, id]);
    localStorage.setItem(id, id);
  } else {
    setFavorite([...favorite.filter((filteredItem) => filteredItem !== id)]);
    localStorage.removeItem(id, id);
  }
};
