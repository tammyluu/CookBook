import classes from './HomePage.module.css'
import axios from 'axios'
import { useEffect, useState } from 'react'
import RecipieListItem from './RecipeListItem'

function HomePage(){
    const[recipies, setRecipies] = useState([])
        useEffect(()=>{
            axios.get('http://laSuperApiDeTam/recipies')
            .then(response=> {
                setRecipies(prev=>[...response.data])
            })
        },[])
        
        return(
            <>
    <ul className={styles.list}>
    {recipies.map((recipe) => (
        <RecipieListItem key={recipe.id} recipe={recipe}/>
        ))}
</ul>
<br></br>

</>
)
}


    export default HomePage