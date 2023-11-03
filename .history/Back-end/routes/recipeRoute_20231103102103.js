import express from 'express';
import 'dotenv/config';
import Recipe from '../models/Recipe.js';
import RecipeDao from '../dao/RecipeDao.js';
import {authMiddleware} from'../middleware/middleware.js';

const recipe = express.Router();
const FILE_PATH = './data/db.json';
recipe.use(express.json());

const recipeDao = new RecipeDao(FILE_PATH)

recipe.get('/', function (req, res) {
return res.json(recipeDao.getAll());
})

recipe.get('/:id', (req, res) => {
    let recipe = recipeDao.getOneById(req.params.id);
    return recipe == undefined ? res.sendStatus(404) : res.json(recipe);
});
recipe.post('/', authMiddleware, (req, res) => {
    const {img_url, name, description, cookTime, prepTime,budget,difficulty,slogan, ingredients} = req.body;
    let recipe = new Recipe(null,img_url, name, description, cookTime, prepTime,budget,difficulty,slogan, ingredients);
    res.json(recipeDao.save(recipe));
    console.log(recipe);
});
recipe.put('/:id', authMiddleware, (req, res) => {
    const {id,img_url, name, description, cookTime, prepTime,budget,difficulty,slogan, ingredients} = req.body;
    if(req.params.id!=req.body.id) return res.sendStatus(409);
    let recipe = new Recipe(id,img_url, name, description, cookTime, prepTime,budget,difficulty,slogan, ingredients);
    return recipeDao.updateRecipe(recipe) ? res.sendStatus(409) :res.json(recipe)
});
recipe.delete('/:id', authMiddleware, (req, res) => {
    console.log(req.params.id);
    recipeDao.deleteRecipe(req.params.id);
    console.log("recipe deleted " + req.params.id);
    res.sendStatus(204);
});

export default recipe;