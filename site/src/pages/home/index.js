import { useState } from "react";

export default function Index() {

    async function cadstrarPet(pet) {
        const resp = 
    }


    const [nome, setNome] = useState('');
    return(
        <main>
            <div>
                <h1>Cadastrar Pet</h1>
            </div>

            <div>
                <h2>Nome do Pet:</h2>
                <input type='text' value={nome} onChange={e => setNome(e.target.value)} />
            </div>
            <div>
                <button  onClick={cadastrarPet}>Cadastrar</button>
                </div>
        </main>
    )
}

