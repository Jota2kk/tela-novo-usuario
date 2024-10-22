/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import './App.css'
import CadastroInicial from './components/inicial/inicial'
import axios from 'axios'
import { gettUsers } from './services/api'
import Lista from './components/lista/lista'

function App() {

  const [users, setUsers] = useState([])

 
   useEffect(()=> {
      axios.get("http://localhost:5000/")
      .then(res => setUsers(res.data))
      .catch(err => console.log(err))
   }, [])





 return (
    <>
      <div>

        <h1 style={{textAlign:"center", margin:"22px auto", fontSize:"3vw" }}>
          Novo Usuario
        </h1>

        <CadastroInicial></CadastroInicial>
         
        <Lista users={users}></Lista>
      </div>
      

    </>
 ) }


export default App;


