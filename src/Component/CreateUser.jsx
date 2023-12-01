import { useState } from "react"
import style from "./Home.module.css"
import axios from "axios"
import { useNavigate } from "react-router-dom"
const CreateUser =()=>{
    let [name, setName]=useState("")
    let [email, setEmail]=useState("")
    let [number, setNumber]=useState("")

    let navigate = useNavigate()
 let nameData=(e)=>{
    // console.log(e);
    setName(e.target.value)
 }
 
 let emailData=(e)=>{
    // console.log(e);
    setEmail(e.target.value)
 }
 let numberData=(e)=>{
    // console.log(e);
    setNumber(e.target.value)
 }

 let formhandle=(e)=>{
    let payload ={name,email,number}

    e.preventDefault()
    axios.post(`http://localhost:3000/users`,payload)
    .then((response)=>{
        console.log("Data has been stored");
        navigate("/user")
    })
    .catch((response)=>{
      console.log("Data hasnt stored");
    })

    }
 

     return(
        <div id={style.form}>
       <form id="formfield">
        <label htmlFor="">Name :</label> <br />
        <input type="text" placeholder="Enter name" onChange={nameData} value={name} ></input> <br />

        <label htmlFor="">E mail :</label><br />
        <input type="email" placeholder="Enter e mail" onChange={emailData} value={email} ></input>  <br />

        <label htmlFor="">Phone_number :</label><br />
        <input type="number" placeholder="Enter Ph_number" onChange={numberData} value={number} ></input>  <br /><br /> 

        <button onClick={formhandle}>Submit</button>

       </form>
        </div>
    )
}

export default CreateUser