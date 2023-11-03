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
        DataStore.ingredients = DataStore.data.ingredients.filter((ingredient) => ingredient.id !== id);
      DataStore.write(); 
      }

      update(ingredientUpdate ) {
        const ingredient = this.getOneById(ingredientUpdate.id);
        if (ingredient == undefined){
            return false
        }
        ingredient.name = ingredientUpdate.name;
        ingredient.quantity= ingredientUpdate.quantity;
        DataStore.write();
        return true;
    }

}
