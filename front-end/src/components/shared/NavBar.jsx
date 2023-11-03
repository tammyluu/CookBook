import { NavLink } from 'react-router-dom'
import classes from "./NavBar.module.css"


const Navbar = () => {
  return (
    <>
    <nav className={classes.navbar}>
      <div className="container">
        <div className="logo">
          <img src="../public/Cook Master" alt="" />
        </div>
        <div className={classes.navItem}>
          <ul className={classes.navbarNav}>
            <li>
              <NavLink className={classes.navLink} to="/sign">Connexion</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </>
  )
}

export default Navbar