import { useSelector } from "react-redux";
import {Navigate} from "react-router-dom"

//This component will assure components with authentification required to be secured
// <RouteProtector><ThisComponent/></RouteProtector>

const RouteProtector = (props) => {
    const user = useSelector(state.auth.user)

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