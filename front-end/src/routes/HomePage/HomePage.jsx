import classes from './HomePage.module.css'
import axios from 'axios'
import { useEffect, useState } from 'react'
import RecipeListItem from '../../components/recipe/RecipeListItem'
import { useDispatch, useSelector } from 'react-redux'
import { setFormMode } from '../../components/recipe/recipesSlice'
import Modal from '../../components/shared/Modal'
import EditRecipe from '../../components/Forms/EditRecipe'
import Navbar from '../../components/shared/NavBar'

function HomePage(){
    const[recipies, setRecipies] = useState([])
    const formMode = useSelector(state => state.recipes.formMode)
    const dispatch = useDispatch()

        useEffect(()=>{
            axios.get('http://127.0.0.1:5050/recipes')
            .then(response=> {
                setRecipies(prev=>[...response.data])
            })
        },[])
        
        return(
            <>  
                <Navbar />
                {formMode === "edit" && <Modal onClose={() => dispatch(setFormMode("edit"))}><EditRecipe/></Modal>} 
                <ul>
                    {recipies.map((recipe) => (
                    <RecipeListItem key={recipe.id} recipe={recipe}/>
                    ))}
                </ul>
            </>
    )
}


export default HomePage