import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editRecipe } from "../recipe/recipesSlice";
import { setFormMode } from "../recipe/recipesSlice";

const EditRecipe = () => {
    const dispatch = useDispatch()
    const selectedRecipe = useSelector(state => state.recipes.selectedRecipe)

    const nameRef = useRef()
    const descriptionRef = useRef()

    const editFormHandler = (event) => {
        event.preventDefault()

        const newRecipe = {
            name: nameRef.current.value,
            description: descriptionRef.current.value,
        }
        
        dispatch(editRecipe({...newRecipe, id: selectedRecipe.id}))
        dispatch(setFormMode("edit"))
        console.log(newRecipe);
    }

    return ( 
        <>
            <h3>Editer ce projet</h3>
            <hr />
            <form onSubmit={editFormHandler}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Nom de la recette:</label>
                    <input type="text" className="form-control" required ref={nameRef} defaultValue={selectedRecipe.name}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description:</label>
                    <textarea className="form-control" rows="3" ref={descriptionRef} defaultValue={selectedRecipe.description}></textarea>
                </div>
                <div className="text-end">
                    <button className="btn btn-warning">Editer</button>
                </div>
            </form>
        </>
     );
}
 
export default EditRecipe;