import './App.css';

import { Route, Routes } from 'react-router-dom';
import Layout from './Components/Layout';
import MainScreenComponent from './Components/MainScreenComponent';
import SingleRecipe from './Components/SingleRecipe';
import MealType from './Components/MealType';
import RecipeList from './Components/RecipeList';
import { SelectFavoriteProvider } from './Context/FavoriteRecipe';

function App() {
  return (
    <SelectFavoriteProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainScreenComponent />} />
          <Route path="random-recipe/:id" element={<SingleRecipe />} />
          <Route path="meal-types/:category" element={<MealType />} />
          <Route
            path="meal-types/:category/:meal_type"
            element={<RecipeList />}
          />
          <Route path="*" element={<div>Page not found. Error 404</div>} />
        </Route>
      </Routes>
    </SelectFavoriteProvider>
  );
}

export default App;
