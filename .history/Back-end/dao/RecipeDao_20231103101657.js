
import { v4 as uuidv4 } from "uuid";
import { DataStore } from "../utils.js";
import IngredientDao from "./IngredientDao.js";
import Ingredient from "../models/Ingredient.js";

export default class RecipeDao {
    constructor() {
      this.recipes = [];
     
    }
        
    getAll() {
        return DataStore.data.recipes;
      }
    getOneById(id) {
        return DataStore.data.recipes.find((ingr) => (ingr.id == id));
      }

    save(recipe) {
        recipe.id = Date.now();
        
        const ingredientDao = new IngredientDao();
        //console.log(Array.isArray(recipe.ingredients)); 
        console.log(recipe);
        console.log(recipe.ingredients)
        console.log(typeof recipe.ingredients);
            // Vérifier que les ingredients existent
       /*  recipe.ingredients.forEach((ingr) => {
          if (ingredientDao.getOneById(ingr.id) === undefined) {
            throw new Error(`Unable to find the ingredient with id: ${ingr.id}`);
          }
          
        });  */
        DataStore.data.recipes.push(recipe);
        DataStore.write();
        return recipe;
    }
    deleteRecipe(id) {
      DataStore.data.recipes = DataStore.data.recipes.filter((recipe) => recipe.id !== id);
      console.log(recipe);
      DataStore.write();
      
    }
    updateRecipe(recipeUpDate) {
        const recipe = this.getOneById(recipeUpDate.id);
        console.log(recipe.id);
        if(recipe == undefined){
            return false
        }
        recipe.img_url = recipeUpDate.img_url;
        recipe.name= recipeUpDate.name;
        recipe.description= recipeUpDate.description;
        recipe.cookTime = recipeUpDate.cookTime;
        recipe.prepTime = recipeUpDate.prepTime;
        recipe.budget= recipeUpDate.budget;
        recipe.difficulty = recipeUpDate.difficulty;
        recipe.ingredients = recipeUpDate.ingredients;
        recipe.slogan = recipeUpDate.slogan;

        DataStore.write();
        console.log("Recette modified");
        return true;
    }
    searchByName(name) {
        return this.recipes.filter(recipe => recipe.name === name);
      }
    searchByBudget(budget) {
        return this.recipes.filter(recipe => recipe.budget === budget);
      }
    searchByCooktime(cookTime) {
        return this.recipes.filter(recipe => recipe.cookTime === cookTime);
      }

}
 