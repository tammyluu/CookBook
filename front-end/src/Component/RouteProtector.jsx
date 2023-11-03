import { UseSelector } from "react-redux";
import {Navigate} from "react-router-dom"

const RouteProtector = (props) => {
    const user = UseSelector(stae.auth.user)

    if(user) {
        return(
            <>
            {props.children}           
            </>
        )
    }else{
        return(
            <Navigate to ={`/auth?mode=in`}/>
            )
        } 
}

export default RouteProtector