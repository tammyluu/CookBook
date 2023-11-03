import express from 'express';
import 'dotenv/config';
import IngredientDao from "../dao/IngredientDao.js";
import Ingredient from '../models/Ingredient.js';
import {authMiddleware} from'../middleware/middleware.js';

const ingr = express.Router();
const FILE_PATH = './data/db.json';
ingr.use(express.json());

const ingredientDao = new IngredientDao(FILE_PATH)

ingr.get('/', function (req, res) {
return res.json(ingredientDao.getAll());
})

ingr.get('/:id', (req, res) => {
    let ingredient = ingredientDao.getOneById(req.params.id);
    return ingredient == undefined ? res.sendStatus(404) : res.json(ingredient);
});
ingr.post('/', authMiddleware, (req, res) => {
    const {name, quantity} = req.body;
    let ingredient = new Ingredient(null, name, quantity);
    res.json(ingredientDao.save(ingredient));
});
ingr.put('/', authMiddleware, (req, res) => {
    const {id,name, quantity} = req.body;
    if(req.params.id!=req.body.id) return res.sendStatus(409);
    let ingredient = new Ingredient(id, name, quantity);
    return ingredientDao.update(ingredient) ? res.sendStatus(409) :res.json(ingredient)
});
ingr.delete('/:id', authMiddleware, (req, res) => {
    ingredientDao.delete(req.params.id);
    res.sendStatus(204);
});
export default ingr;
