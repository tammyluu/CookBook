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
            <img className='imgBg' src="https://images.pexels.com/photos/6605903/pexels-photo-6605903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="displaying food" />
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