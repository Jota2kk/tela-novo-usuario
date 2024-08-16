/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import "./cadastroInicialStyles.css";
import { useState } from 'react';
import axios from 'axios';

function CadastroInicial() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [fone, setFone] = useState('')
    const [data_nascimento, setData_Nascimento] = useState()

    function handleSubmit (event){
        event.preventDefault();
        axios.post("http://localhost:5000/", {name, email, fone, data_nascimento})
        .then(res => console.log(res))    
        .catch(err => console.log(err))

    }
    
    
    return (
        <div className='cadastro-inicial-container'>
            <form type="submit" className='cadastro-inputs' onSubmit={handleSubmit}>
                <label>
                    Nome
                    <input
                    type="text"
                    name="name"
                    placeholder="nome"
                    onChange={e => setName(e.target.value)}/>
                </label>

                <label>
                    Telefone
                    <input
                    type="text"
                    name="fone"
                    placeholder="telefone"
                    onChange={e => setFone(e.target.value)}/>
                </label>

                <label>
                    Email
                    <input 
                    type="text"
                    name="email"
                    placeholder="email"
                    onChange={e => setEmail(e.target.value)}/>
                </label>

                <label>
                    Data de nascimento
                    <input 
                    type="date"
                    name="data_nascimento"
                    placeholder="datadenascimento"
                    onChange={e => setData_Nascimento(e.target.value)}/>
                </label>

                <button type='submit'>
                    enviar
                </button>
            </form>
        </div>
    )
}
export default CadastroInicial;