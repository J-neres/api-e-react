import { con } from './connection.js'

export async function cadastrarPet (nome) {
    const cmd = `
    insert into tb_pet (nm_pet)
            values (?)`

    const [ linhas ] = await (await con).query(cmd, [ nome ])
    return linhas; 
    
}

export async function consultarPet() {
    const cmd = `select * from tb_pet`

    const [respost] = await (await con).query(cmd)
    return respost;
}