import './App.css';

import { Route, Routes } from 'react-router-dom';
import Layout from './Components/Layout';
import MainScreenComponent from './Components/MainScreenComponent';
import SingleRecipe from './Components/SingleRecipe';
import MealType from './Components/MealType';
import RecipeList from './Components/RecipeList';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainScreenComponent />} />
        <Route path="random-recipe/:id" element={<SingleRecipe />} />
        <Route path="meal-types" element={<MealType />} />
        <Route path="meal-types/:meal_type" element={<RecipeList />} />
        <Route path="*" element={<div>Page not found. Error 404</div>} />
      </Route>
    </Routes>
  );
}

export default App;
