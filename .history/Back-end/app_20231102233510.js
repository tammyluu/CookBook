import { DataStore } from "./utils.js";
import { resolve } from "path";
import express from "express";
import recipe from "./routes/recipeRoute.js";
import ingr from "./routes/ingredientRoute.js";


const DB_PATH = resolve("./data/db.json");
const PORT = 5050;
DataStore.file = DB_PATH;
DataStore.data = {users: [], recipes: [],ingredients: []};
 
const app = express();
app.use(express.json());
app.use(cors());


app.use("/recipes", recipe);
app.use("/ingredients", ingr);

app.listen(PORT, () => {
  // Lecture du fichier db.json lors de l'initialisation de l'application
  DataStore.read();
  console.log(`Server is listening on http://127.0.0.1:${PORT}`);
});