import { configureStore } from '@reduxjs/toolkit';
import recipesSlice from './components/recipe/recipesSlice';




export const store = configureStore({
  reducer: {
    recipes: recipesSlice
  },
});

export default store