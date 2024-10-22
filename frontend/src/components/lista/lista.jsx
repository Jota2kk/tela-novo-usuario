/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import axios from "axios";
import '../lista/lista.css';

function Lista({users}) {

    
    return (
        <div className="lista">
            <table className="table-lista">

                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>fone</th>
                    </tr>
                </thead>

                <tbody>
                    {users.map((item, i)=> (
                        <tr key={i}>
                            <td>{item.name}</td>
                            <td>{item.fone}</td>
                            <td>{item.email}</td>
                        </tr>
                    ))}
                </tbody>


            </table>
        </div>
    )
}

export default Lista;