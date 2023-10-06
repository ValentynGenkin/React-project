function FavoriteButton({ meal, saveFavorite, favorite }) {
  const isSelected = favorite.includes(meal.id);

  let favoriteImg;

  if (!isSelected) {
    favoriteImg = '/assets/heart-red.png';
  } else {
    favoriteImg = '/assets/heart-favorite.png';
  }

  return (
    <img
      src={favoriteImg}
      alt={'favorite-icon'}
      onClick={() => {
        saveFavorite(meal.id);
      }}
    />
  );
}

export default FavoriteButton;
