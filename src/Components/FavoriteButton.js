import '../CSS/FavoriteButton.css';

function FavoriteButton({ meal, saveFavorite, favorite, setFavorite }) {
  const isSelected = favorite.includes(meal.id);

  let favoriteImg;

  if (!isSelected) {
    favoriteImg = '/assets/heart-red.png';
  } else {
    favoriteImg = '/assets/heart-favorite.png';
  }

  return (
    <img
      className="favorite-btn"
      src={favoriteImg}
      alt={'favorite-icon'}
      onClick={() => {
        saveFavorite(meal.id, favorite, setFavorite);
      }}
    />
  );
}

export default FavoriteButton;
