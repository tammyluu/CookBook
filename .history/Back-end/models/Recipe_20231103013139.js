export default class Recipe{
  
    constructor(id,img_url, name, description, cookTime, prepTime,budget,difficulty,slogan, ingredients){
        this.id = id;
        this.img_url = img_url;
        this.name = name;
        this.description = description;
        this.cookTime = cookTime;
        this.prepTime = prepTime;
        this.budget = budget;
        this.difficulty = difficulty;
        this.slogan = slogan;
        this.ingredients = []];
    }
}