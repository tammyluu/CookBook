import { DataStore } from "../utils.js";

export default class IngredientDao {
    constructor() {}

    getAll() {
        return DataStore.data.products;
      }
    
      getOneById(id) {
        return DataStore.data.ingredients.find((i) => (i.id == id));
      }

      save(ingredient) {
        ingredient.id = id;
        DataStore.data.ingredients.insert(ingredient);
        DataStore.write();
        return ingredient
      }
      deleteIngredient(id) {
        const ingredient = this.recipes.filter((i) =>i.id !== id);
        this.writeFile();
    }
    updateIngredient(ingredientUpdate
        ) {
        const ingredient = this.findById(ingredientUpdate
            .id);
        if (ingredient == undefined){
            return false
        }
    ingredient.name = ingredientUpdate
    .name;
    ingredient.quantity= ingredientUpdate
    .quantity;

       this.writeFile();
        return true;
    }

}
