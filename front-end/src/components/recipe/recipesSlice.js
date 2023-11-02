import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from 'axios';

export const fetchRecipes = createAsyncThunk(
    'recipes/fetchAll',
    async () => {
      const response = await axios.get('http://localhost:5050/');
      return response.data;
    }
  );

export const addRecipe = createAsyncThunk(
    'recipes/add',
    async (recipe) => {
      const response = await axios.post('http://localhost:5050/recipes', recipe);
      if(!response.ok) {
        throw new Error("Something went wrong with the POST request")
    }
      return response.data;
    }
  );

export const editRecipe = createAsyncThunk(
    'recipes/edit',
    async (recipe) => {
      const response = await axios.put(`http://localhost:5050/recipes${recipe.id}`);
      if(!response.ok) {
        throw new Error("Something went wrong with the PUT request")
    }
      return {
        id: response.title,
        ...recipe
    }
    }
  );

export const deleteRecipe = createAsyncThunk(
    'recipes/delete',
    async (selectedRecipe) => {
      const response = await axios.delete(`http://localhost:5050/recipes${selectedRecipe.id}`);
      if(!response.ok) {
        throw new Error("Something went wrong during the DELETE request")
    }
      return selectedRecipe.id
    }
  );


const recipeSlice = createSlice({
    name: "recipes",
    initialState: {
        formMode: "",
        recipes: [],
        selectedRecipe: null
    },
    reducers: {
        setFormMode:(state, action) => {
            state.formMode = action.payload
        },
        setSelectedRecipe: (state, action) => {
            state.selectedRecipe = action.payload
        }
    },
    extraReducers: (builder) => {
        //set recipes
        builder.addCase(fetchRecipes.fulfilled, (state, action) => {
            state.recipes = action.payload
        })
        //add recipe
        builder.addCase(addRecipe.fulfilled, (state, action) => {
            state.recipes.push(action.payload)
        })
        //edit recipe
        builder.addCase(editRecipe.fulfilled, (state, action) => { 
            let foundrecipe = state.recipes.find(recipe => recipe.id === action.payload.id)
            if (foundrecipe) {
                state.recipes = [...state.recipes.filter(recipe => recipe.id !== action.payload.id), action.payload]
            }
        })
        // delete recipe
        builder.addCase(deleteRecipe.fulfilled, (state, action) => { 
            let foundrecipe = state.recipes.find(a => a.id === action.payload)
            if (foundrecipe) {
                state.recipes = state.recipes.filter(a => a.id !== action.payload)
            }
        }) 
        }
})

export const {setFormMode, setSelectedRecipe} = recipeSlice.actions
export default recipeSlice.reducer