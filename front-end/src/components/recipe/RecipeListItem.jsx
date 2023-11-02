import classes from "./RecipeListItem.module.css"

const RecipeListItem = () => {
    return ( 
        <>
        <div>
            <div className={classes.card}>
                <img className={classes.img} src="https://images.unsplash.com/photo-1602253057119-44d745d9b860?auto=format&fit=crop&q=80&w=1926&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                <div className={classes.cardBody}>
                    <h4 className={classes.title}>Recette 1</h4>
                    <div className={classes.txt}>
                        <span>Temps préparation</span>
                        <span>Difficulté</span>
                        <span>Budget</span>
                    <p>phrase d'accroche</p>
                    </div>
                        <button className={classes.details}>Détails</button>
                        <div className={classes.buttons}> 
                            <button className={classes.edit}>Modifier</button>
                            <button className={classes.delete}>Supprimer</button>
                        </div>   
                </div>
            </div>
        </div>
        </>
     );
}
 
export default RecipeListItem;