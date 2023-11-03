
import { v4 as uuidv4 } from "uuid";
import { DataStore } from "../utils.js";
import IngredientDao from "./IngredientDao.js";

export default class RecipeDao {
    constructor() {}
        
    getAll() {
        return DataStore.data.recipes;
      }
    getOneByName(name) {
        return DataStore.data.orders.find((ingr) => (ingr.name == id));
      }

    save(recipe) {
        recipe.id = Date.now();
        
        const ingredientDao = new IngredientDao();
          
            // Vérifier que les ingredients existent
        recipe.ingredients.forEach((ingr) => {
          if (ingredientDao.getOneByName(ingr.name) === undefined) {
            throw new Error(`Unable to find the ingredient with name: ${ingr.name}`);
          }
          DataStore.data.recipes.push(recipe);
          DataStore.write();
          return recipe;
        });
    }
    deleteRecipe(id) {
        const recipe = this.recipes.filter((recipe) => recipe.id !== id);
        this.writeFile();
    }
    updateRecipe(recipeUpDate) {
        const recipe = this.findById(recipeUpDate.id);
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

        this.writeFile();
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
 