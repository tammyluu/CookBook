import './App.css';
import { NavLink, Outlet } from 'react-router-dom';
import {  dispatch, useSelector } from 'react-redux';
import { removeUser } from './Routes/Auth/AuthSlice';

function App() {

  const user = useSelector(state=>state.auth.user)

  const onClickLogOutHandler=()=>{
    dispatch(removeUser())
  }

  return (
    <div className="App">
      <header className="AppHeader">
        <nav>
          <div> 
            <NavLink className="navLink" to="/"> <img className='imgSvg' src="https://icons.getbootstrap.com/assets/icons/globe2.svg" alt="" /> eIMC</NavLink>
            {
              user? <NavLink className="navLink" to="/user">User</NavLink>
              :
              <div></div>
            }
            
          </div>
          <div>
            { user ?
              <NavLink className="AuthLink" onClick={onClickLogOutHandler}>Log Out</NavLink>
              :
              <>
                <NavLink className="AuthLink" to="/auth?mode=in">Log In</NavLink>
                <NavLink className="AuthLink" to="/auth?mode=up">Register</NavLink>
              </>
            }
          </div>
        </nav>
      </header>
      <main>
        <Outlet/>
      </main>
    </div>
  );
}

export default App;
