import axios from "axios"
import style from "./Home.module.css"
import { useEffect, useState } from "react"
import {  useNavigate } from "react-router-dom"
const User =()=>{

    let [data, setData]=useState([])
    let navigate = useNavigate()

    let updateData =(id)=>{
       
    navigate(`/update/${id}`)
    }

    let deleteData=(e)=>{
        axios.delete(`http://localhost:3000/users/${e}`)
    window.location.reload("/user")
    
    }
    useEffect(()=>{
        axios.get(`http://localhost:3000/users`)
    .then((response)=>{
     setData(response.data)
    })
    .catch(()=>{
        console.log("Data hasnt fetch");
    })
    },[])

    
    return(
        <div id={style.formdiv}   >
           {data.map((e)=>{
             return(
                <table id={style.userform}  key={e.id}>
               <tbody>
               <tr>
                 <td>Name :</td>
                 <td>{e.name}</td>
             </tr>
 
             <tr>
                 <td>Email :</td>
                 <td>{e.email}</td>
             </tr>
 
             <tr>
                 <td>Phonenumber :</td>
                 <td>{e.number}</td>
             </tr>
              <tr>
                <td ><button onClick={()=>{updateData(e.id)}} >Update</button></td>
                <td ><button onClick={()=>{deleteData(e.id)}} >Delete</button></td>
              </tr>
               </tbody>
              
            </table>                   

             )
           })}
        </div>
    )
}

export default User