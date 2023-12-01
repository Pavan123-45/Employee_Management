import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Component/Home"
import CreateUser from "./Component/CreateUser"
import User from "./Component/User"
import Update from "./Component/Update"


const App =()=>{

    return(
        <div>
           <BrowserRouter>
           <Home></Home>
           <Routes>
            <Route element={<CreateUser></CreateUser>} path="/createuser"></Route>
            <Route element={<User></User>} path="/user"></Route>
            <Route element={<Update></Update>} path="/update/:abc"></Route>
           </Routes>
           </BrowserRouter>
        </div>
    )
}

export default App