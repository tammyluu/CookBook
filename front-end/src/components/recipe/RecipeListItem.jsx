import { useDispatch, useSelector } from "react-redux"
import classes from "./RecipeListItem.module.css"
import { setSelectedRecipe, setFormMode } from "./recipesSlice"



const RecipeListItem = (props) => {
    const recipe = props.recipe
    const dispatch = useDispatch()


    const editRecipeHandler = () => {
        dispatch(setFormMode("edit"))
        dispatch(setSelectedRecipe(recipe))
    }

    const deleteRecipeHandler = () => {
        dispatch(setFormMode("delete"))
        dispatch(setSelectedRecipe(recipe))
    }

    return ( 
        <> 
            <div className={classes.card}>
                <img className={classes.img} src="https://images.unsplash.com/photo-1602253057119-44d745d9b860?auto=format&fit=crop&q=80&w=1926&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                <div className="col ms-3 mb-3">
                    <h4 className={classes.title}>{recipe.name}</h4>
                    <div className="mb-3">
                        <span className="me-3"><i className="bi bi-stopwatch me-1"></i>{recipe.cookTime}min</span>
                        <span className="me-3"><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill me-1"></i>Difficulté</span>
                        <span className="me-3">{recipe.budget}€</span>
                    <p className="mt-2">Phrase d'accroche</p>
                    </div>
                        <button className={classes.details}>Détails</button>
                        <div className="text-end me-2"> 
                            <button onClick={() => editRecipeHandler()} className={classes.edit}>Modifier</button>
                        <div className={classes.space}> </div>
                            <button onClick={() => deleteRecipeHandler()} className={classes.delete}>Supprimer</button>
                        </div>
                </div>
            </div>
        </>
     );
}
 
export default RecipeListItem;