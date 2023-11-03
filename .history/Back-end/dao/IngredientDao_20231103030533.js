import { DataStore } from "../utils.js";

export default class IngredientDao {
    constructor() {
      this.ingredients = [];
    }

    getAll() {
        return DataStore.data.ingredients;
      }
    
      getOneById(id) {
        return DataStore.data.ingredients.find((i) => (i.id == id));
      }

      save(ingredient) {
        ingredient.id = Date.now();
        DataStore.data.ingredients.push(ingredient);
        DataStore.write();
        return ingredient
      }
      delete(id) {
        const ingredients = this.ingredients.filter((i) =>i.id !== id);
        DataStore.write();  
      }

      update(ingredientUpdate ) {
        const ingredient = this.findById(ingredientUpdate.id);
        if (ingredient == undefined){
            return false
        }
        ingredient.name = ingredientUpdate.name;
        ingredient.quantity= ingredientUpdate.quantity;

        DataStore.write();
        return true;
    }

}
