import { Link } from "react-router-dom"
import style from "./Home.module.css"
const Home = ()=>{
    return(
        <div id={style.nav}>

      <Link to="/createuser">Create-User</Link>
      <Link to= "/user">User</Link>

        </div>
    )
}
export default Home